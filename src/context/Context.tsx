import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  FC,
} from "react";
import {
  AuthClient,
  AuthClientCreateOptions,
  AuthClientLoginOptions,
} from "@dfinity/auth-client";
import { canisterId as iiCanId } from "../declarations/internet_identity";
import { _SERVICE as _ICFORGE_SERVICE } from "../declarations/icforge_backend/icforge_backend.did";
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";
import {
  canisterId as icForgeCanId,
  idlFactory as icForgeIDL,
} from "../declarations/icforge_backend";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  identity: any;
  backendActor: ActorSubclass<_ICFORGE_SERVICE> | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

const network = "ic";
const localhost = "http://localhost:4943";
const host = "https://icp0.io";

interface DefaultOptions {
  createOptions: AuthClientCreateOptions;
  loginOptions: AuthClientLoginOptions;
}

const defaultOptions: DefaultOptions = {
  createOptions: {
    idleOptions: {
      disableIdle: true,
    },
  },
  loginOptions: {
    identityProvider:
      network === "ic"
        ? "https://identity.ic0.app/#authorize"
        : `http://localhost:4943?canisterId=${iiCanId}`,
  },
};

export const useAuthClient = (options = defaultOptions) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [identity, setIdentity] = useState<any>(null);
  const [backendActor, setBackendActor] =
    useState<ActorSubclass<_ICFORGE_SERVICE> | null>(null);

  useEffect(() => {
    AuthClient.create(options.createOptions).then(async (client) => {
      updateClient(client);
    });
  }, []);

  const login = () => {
    authClient?.login({
      ...options.loginOptions,
      onSuccess: () => {
        updateClient(authClient);
      },
    });
  };

  async function updateClient(client: AuthClient) {
    setAuthClient(client);
    const isAuthenticated = await client.isAuthenticated();
    setIsAuthenticated(isAuthenticated);

    const _identity = client.getIdentity();
    setIdentity(_identity);

    let agent = new HttpAgent({
      host: network === "ic" ? host : localhost,
      identity: _identity,
    });

    if (network !== "ic") {
      agent.fetchRootKey();
    }

    const _backendActor: ActorSubclass<_ICFORGE_SERVICE> = Actor.createActor(
      icForgeIDL,
      {
        agent,
        canisterId: icForgeCanId,
      }
    );
    setBackendActor(_backendActor);
  }

  async function logout() {
    await authClient?.logout();
    await updateClient(authClient);
  }

  return {
    isAuthenticated,
    login,
    logout,
    identity,
    backendActor,
  };
};

interface LayoutProps {
  children: React.ReactNode;
}

export const AuthProvider: FC<LayoutProps> = ({ children }) => {
  const auth = useAuthClient();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
