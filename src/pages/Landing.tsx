import { useAuth } from "../context/Context";

const Landing = () => {
  const { login } = useAuth();

  return (
    <div className="flex flex-col justify-center bg-purple-400 py-7 text-white min-h-screen  ">
      <div className=" bg-purple-800 rounded-xl mx-[200px]">
        <h1 className="text-4xl font-montreal py-10  text-center cursor-pointer">
          ICForge
        </h1>
        <h1 className="font-montrealBold uppercase my-[150px] text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Easily deploy your canisters without writing any code
        </h1>
        <div className="flex justify-center my-20">
          <button 
            onClick={login}
          className="px-5 py-3 rounded-lg bg-gray-400 text-lg">
            Login with Internet Identity
          </button>
        </div>
        <div className="flex justify-center my-20">
          <a
            href="https://dfinity.org"
            className="flex justify-center items-center"
          >
            <svg
              className="hover:text-gray-900 dark:hover:text-white"
              width="228"
              height="49"
              viewBox="0 0 228 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="227"
                height="48"
                rx="3.5"
                fill="white"
                stroke="url(#paint0_linear_1810_46)"
              />
              <path
                d="M51.3703 12C48.4634 12 45.2947 13.5165 41.9454 16.5037C40.3565 17.9191 38.9842 19.4357 37.9551 20.6489C37.9551 20.6489 37.9551 20.6489 37.9641 20.6581V20.6489C37.9641 20.6489 39.5891 22.4504 41.3856 24.3805C42.3516 23.2133 43.7419 21.6232 45.3398 20.1894C48.319 17.5331 50.2599 16.9724 51.3703 16.9724C55.5502 16.9724 58.9446 20.3456 58.9446 24.4908C58.9446 28.6085 55.5412 31.9816 51.3703 32.0092C51.1808 32.0092 50.937 31.9816 50.6301 31.9173C51.8488 32.4504 53.1578 32.8364 54.4037 32.8364C62.0592 32.8364 63.5578 27.7537 63.6571 27.3861C63.8828 26.4577 64.0002 25.4835 64.0002 24.4816C64.0002 17.6066 58.3307 12 51.3703 12Z"
                fill="url(#paint1_linear_1810_46)"
              />
              <path
                d="M24.6298 36.9999C27.5368 36.9999 30.7055 35.4834 34.0548 32.4962C35.6437 31.0808 37.0159 29.5642 38.0451 28.351C38.0451 28.351 38.0451 28.351 38.0361 28.3418V28.351C38.0361 28.351 36.4111 26.5495 34.6145 24.6194C33.6486 25.7867 32.2583 27.3767 30.6604 28.8106C27.6812 31.4668 25.7403 32.0275 24.6298 32.0275C20.45 32.0183 17.0555 28.6451 17.0555 24.4999C17.0555 20.3822 20.459 17.0091 24.6298 16.9815C24.8194 16.9815 25.0632 17.0091 25.3701 17.0734C24.1514 16.5403 22.8423 16.1543 21.5965 16.1543C13.941 16.1543 12.4514 21.237 12.3431 21.5955C12.1174 22.533 12 23.4981 12 24.4999C12 31.3933 17.6694 36.9999 24.6298 36.9999Z"
                fill="url(#paint2_linear_1810_46)"
              />
              <path
                d="M54.3856 32.7261C50.4675 32.625 46.396 29.4816 45.5654 28.7004C43.4168 26.6783 38.4606 21.2096 38.0724 20.7776C34.4432 16.6324 29.5231 12 24.63 12H24.621H24.612C18.6717 12.0276 13.6794 16.1268 12.3433 21.5956C12.4426 21.2371 14.4016 16.0533 21.5877 16.2371C25.5057 16.3382 29.5953 19.5276 30.4349 20.3088C32.5835 22.3309 37.5398 27.7997 37.9279 28.2316C41.5571 32.3677 46.4772 37 51.3703 37H51.3793H51.3883C57.3286 36.9725 62.33 32.8732 63.6571 27.4044C63.5487 27.7629 61.5807 32.9008 54.3856 32.7261Z"
                fill="#29ABE2"
              />
              <path
                d="M73.0301 33.827C73.3063 33.827 73.5301 33.6032 73.5301 33.327V26.6622C73.5301 26.386 73.3063 26.1622 73.0301 26.1622H72.5C72.2239 26.1622 72 26.386 72 26.6622V33.327C72 33.6032 72.2239 33.827 72.5 33.827H73.0301Z"
                fill="#161617"
              />
              <path
                d="M83.2018 33.827C83.478 33.827 83.7018 33.6032 83.7018 33.327V26.6622C83.7018 26.386 83.478 26.1622 83.2018 26.1622H82.6936C82.4174 26.1622 82.1936 26.386 82.1936 26.6622V31.2324L79.264 26.6256C79.0805 26.337 78.7622 26.1622 78.4202 26.1622H77.5895C77.3133 26.1622 77.0895 26.386 77.0895 26.6622V33.327C77.0895 33.6032 77.3133 33.827 77.5895 33.827H78.0978C78.3739 33.827 78.5978 33.6032 78.5978 33.327V28.3892L81.9693 33.5987C82.0614 33.7411 82.2195 33.827 82.389 33.827H83.2018Z"
                fill="#161617"
              />
              <path
                d="M92.4535 27.5784C92.7297 27.5784 92.9535 27.3545 92.9535 27.0784V26.6622C92.9535 26.386 92.7297 26.1622 92.4535 26.1622H87.0379C86.7617 26.1622 86.5379 26.386 86.5379 26.6622V27.0784C86.5379 27.3545 86.7617 27.5784 87.0379 27.5784H88.9861V33.327C88.9861 33.6032 89.21 33.827 89.4861 33.827H90.0053C90.2814 33.827 90.5053 33.6032 90.5053 33.327V27.5784H92.4535Z"
                fill="#161617"
              />
              <path
                d="M100.138 33.827C100.415 33.827 100.638 33.6032 100.638 33.327V32.9216C100.638 32.6455 100.415 32.4216 100.138 32.4216H97.2941V30.6486H99.8215C100.098 30.6486 100.322 30.4248 100.322 30.1486V29.8189C100.322 29.5428 100.098 29.3189 99.8215 29.3189H97.2941V27.5676H100.138C100.415 27.5676 100.638 27.3437 100.638 27.0676V26.6622C100.638 26.386 100.415 26.1622 100.138 26.1622H96.2858C96.0096 26.1622 95.7858 26.386 95.7858 26.6622V33.327C95.7858 33.6032 96.0096 33.827 96.2858 33.827H100.138Z"
                fill="#161617"
              />
              <path
                d="M107.55 33.5559C107.635 33.7224 107.807 33.827 107.994 33.827H108.541C108.918 33.827 109.16 33.4259 108.983 33.0929L107.711 30.6919C108.727 30.4 109.361 29.5892 109.361 28.5189C109.361 27.1892 108.4 26.1622 106.891 26.1622H104.364C104.088 26.1622 103.864 26.386 103.864 26.6622V33.327C103.864 33.6032 104.088 33.827 104.364 33.827H104.883C105.159 33.827 105.383 33.6032 105.383 33.327V30.8757H106.17L107.55 33.5559ZM105.383 29.5892V27.4595H106.607C107.372 27.4595 107.82 27.8811 107.82 28.5297C107.82 29.1568 107.372 29.5892 106.607 29.5892H105.383Z"
                fill="#161617"
              />
              <path
                d="M118.609 33.827C118.885 33.827 119.109 33.6032 119.109 33.327V26.6622C119.109 26.386 118.885 26.1622 118.609 26.1622H118.101C117.825 26.1622 117.601 26.386 117.601 26.6622V31.2324L114.671 26.6256C114.488 26.337 114.17 26.1622 113.828 26.1622H112.997C112.721 26.1622 112.497 26.386 112.497 26.6622V33.327C112.497 33.6032 112.721 33.827 112.997 33.827H113.505C113.781 33.827 114.005 33.6032 114.005 33.327V28.3892L117.377 33.5987C117.469 33.7411 117.627 33.827 117.796 33.827H118.609Z"
                fill="#161617"
              />
              <path
                d="M127.03 33.827C127.306 33.827 127.53 33.6032 127.53 33.327V32.9216C127.53 32.6455 127.306 32.4216 127.03 32.4216H124.186V30.6486H126.713C126.989 30.6486 127.213 30.4248 127.213 30.1486V29.8189C127.213 29.5428 126.989 29.3189 126.713 29.3189H124.186V27.5676H127.03C127.306 27.5676 127.53 27.3437 127.53 27.0676V26.6622C127.53 26.386 127.306 26.1622 127.03 26.1622H123.178C122.901 26.1622 122.678 26.386 122.678 26.6622V33.327C122.678 33.6032 122.901 33.827 123.178 33.827H127.03Z"
                fill="#161617"
              />
              <path
                d="M135.939 27.5784C136.215 27.5784 136.439 27.3545 136.439 27.0784V26.6622C136.439 26.386 136.215 26.1622 135.939 26.1622H130.523C130.247 26.1622 130.023 26.386 130.023 26.6622V27.0784C130.023 27.3545 130.247 27.5784 130.523 27.5784H132.471V33.327C132.471 33.6032 132.695 33.827 132.971 33.827H133.491C133.767 33.827 133.991 33.6032 133.991 33.327V27.5784H135.939Z"
                fill="#161617"
              />
              <path
                d="M146.823 33.9892C148.998 33.9892 150.113 32.5622 150.408 31.3838L148.998 30.9622C148.79 31.6757 148.146 32.5297 146.823 32.5297C145.577 32.5297 144.419 31.6324 144.419 30C144.419 28.2595 145.643 27.4378 146.801 27.4378C148.146 27.4378 148.747 28.2486 148.932 28.9838L150.353 28.5405C150.047 27.2973 148.943 26 146.801 26C144.725 26 142.856 27.5568 142.856 30C142.856 32.4432 144.659 33.9892 146.823 33.9892Z"
                fill="#161617"
              />
              <path
                d="M154.428 29.9892C154.428 28.2595 155.653 27.4378 156.844 27.4378C158.046 27.4378 159.27 28.2595 159.27 29.9892C159.27 31.7189 158.046 32.5405 156.844 32.5405C155.653 32.5405 154.428 31.7189 154.428 29.9892ZM152.866 30C152.866 32.4649 154.745 33.9892 156.844 33.9892C158.953 33.9892 160.833 32.4649 160.833 30C160.833 27.5243 158.953 26 156.844 26C154.745 26 152.866 27.5243 152.866 30Z"
                fill="#161617"
              />
              <path
                d="M172.077 33.827C172.354 33.827 172.577 33.6032 172.577 33.327V26.6622C172.577 26.386 172.354 26.1622 172.077 26.1622H170.858C170.655 26.1622 170.472 26.2846 170.395 26.4722L168.249 31.6973L166.05 26.4683C165.972 26.2828 165.79 26.1622 165.589 26.1622H164.432C164.156 26.1622 163.932 26.386 163.932 26.6622V33.327C163.932 33.6032 164.156 33.827 164.432 33.827H164.875C165.151 33.827 165.375 33.6032 165.375 33.327V28.4973L167.476 33.52C167.554 33.706 167.736 33.827 167.937 33.827H168.528C168.73 33.827 168.912 33.7053 168.989 33.5187L171.091 28.4541V33.327C171.091 33.6032 171.315 33.827 171.591 33.827H172.077Z"
                fill="#161617"
              />
              <path
                d="M177.66 29.6541V27.4595H178.851C179.605 27.4595 180.065 27.8811 180.065 28.5622C180.065 29.2216 179.605 29.6541 178.851 29.6541H177.66ZM179.037 30.9405C180.567 30.9405 181.584 29.9459 181.584 28.5514C181.584 27.1676 180.567 26.1622 179.037 26.1622H176.641C176.365 26.1622 176.141 26.386 176.141 26.6622V33.327C176.141 33.6032 176.365 33.827 176.641 33.827H177.149C177.425 33.827 177.649 33.6032 177.649 33.327V30.9405H179.037Z"
                fill="#161617"
              />
              <path
                d="M187.414 34C189.076 34 190.398 32.9946 190.398 31.1135V26.6622C190.398 26.386 190.174 26.1622 189.898 26.1622H189.39C189.114 26.1622 188.89 26.386 188.89 26.6622V31.0054C188.89 32.0108 188.332 32.5405 187.414 32.5405C186.518 32.5405 185.95 32.0108 185.95 31.0054V26.6622C185.95 26.386 185.726 26.1622 185.45 26.1622H184.941C184.665 26.1622 184.441 26.386 184.441 26.6622V31.1135C184.441 32.9946 185.764 34 187.414 34Z"
                fill="#161617"
              />
              <path
                d="M199.081 27.5784C199.357 27.5784 199.581 27.3545 199.581 27.0784V26.6622C199.581 26.386 199.357 26.1622 199.081 26.1622H193.666C193.389 26.1622 193.166 26.386 193.166 26.6622V27.0784C193.166 27.3545 193.389 27.5784 193.666 27.5784H195.614V33.327C195.614 33.6032 195.838 33.827 196.114 33.827H196.633C196.909 33.827 197.133 33.6032 197.133 33.327V27.5784H199.081Z"
                fill="#161617"
              />
              <path
                d="M206.766 33.827C207.042 33.827 207.266 33.6032 207.266 33.327V32.9216C207.266 32.6455 207.042 32.4216 206.766 32.4216H203.922V30.6486H206.449C206.725 30.6486 206.949 30.4248 206.949 30.1486V29.8189C206.949 29.5428 206.725 29.3189 206.449 29.3189H203.922V27.5676H206.766C207.042 27.5676 207.266 27.3437 207.266 27.0676V26.6622C207.266 26.386 207.042 26.1622 206.766 26.1622H202.913C202.637 26.1622 202.413 26.386 202.413 26.6622V33.327C202.413 33.6032 202.637 33.827 202.913 33.827H206.766Z"
                fill="#161617"
              />
              <path
                d="M214.177 33.5559C214.263 33.7224 214.435 33.827 214.622 33.827H215.169C215.546 33.827 215.787 33.4259 215.611 33.0929L214.339 30.6919C215.355 30.4 215.989 29.5892 215.989 28.5189C215.989 27.1892 215.027 26.1622 213.519 26.1622H210.492V33.327C210.492 33.6032 210.715 33.827 210.992 33.827H211.511C211.787 33.827 212.011 33.6032 212.011 33.327V30.8757H212.798L214.177 33.5559ZM212.011 29.5892V27.4595H213.235C214 27.4595 214.448 27.8811 214.448 28.5297C214.448 29.1568 214 29.5892 213.235 29.5892H212.011Z"
                fill="#161617"
              />
              <path
                d="M73.937 21V13.872H73.123C72.947 14.642 72.276 15.225 71.286 15.269V15.797H73.035V21H73.937ZM78.1258 20.34C77.5978 20.34 77.2128 20.142 76.9268 19.834C76.4538 19.339 76.2558 18.514 76.2558 17.436C76.2558 16.358 76.4538 15.533 76.9268 15.038C77.2128 14.73 77.5978 14.532 78.1258 14.532C78.6538 14.532 79.0388 14.73 79.3248 15.038C79.7978 15.533 79.9958 16.358 79.9958 17.436C79.9958 18.514 79.7978 19.339 79.3248 19.834C79.0388 20.142 78.6538 20.34 78.1258 20.34ZM78.1258 21.154C79.0938 21.154 79.7868 20.725 80.2378 20.065C80.7328 19.35 80.8978 18.404 80.8978 17.436C80.8978 16.468 80.7328 15.522 80.2378 14.807C79.7868 14.147 79.0938 13.718 78.1258 13.718C77.1578 13.718 76.4648 14.147 76.0138 14.807C75.5188 15.522 75.3538 16.468 75.3538 17.436C75.3538 18.404 75.5188 19.35 76.0138 20.065C76.4648 20.725 77.1578 21.154 78.1258 21.154ZM84.8611 20.34C84.3331 20.34 83.9481 20.142 83.6621 19.834C83.1891 19.339 82.9911 18.514 82.9911 17.436C82.9911 16.358 83.1891 15.533 83.6621 15.038C83.9481 14.73 84.3331 14.532 84.8611 14.532C85.3891 14.532 85.7741 14.73 86.0601 15.038C86.5331 15.533 86.7311 16.358 86.7311 17.436C86.7311 18.514 86.5331 19.339 86.0601 19.834C85.7741 20.142 85.3891 20.34 84.8611 20.34ZM84.8611 21.154C85.8291 21.154 86.5221 20.725 86.9731 20.065C87.4681 19.35 87.6331 18.404 87.6331 17.436C87.6331 16.468 87.4681 15.522 86.9731 14.807C86.5221 14.147 85.8291 13.718 84.8611 13.718C83.8931 13.718 83.2001 14.147 82.7491 14.807C82.2541 15.522 82.0891 16.468 82.0891 17.436C82.0891 18.404 82.2541 19.35 82.7491 20.065C83.2001 20.725 83.8931 21.154 84.8611 21.154ZM89.3635 15.478C89.3635 14.917 89.7815 14.499 90.3095 14.499C90.8595 14.499 91.2665 14.917 91.2665 15.478C91.2665 16.039 90.8595 16.457 90.3095 16.457C89.7815 16.457 89.3635 16.039 89.3635 15.478ZM88.5935 15.478C88.5935 16.435 89.3745 17.194 90.3095 17.194C91.2555 17.194 92.0475 16.435 92.0475 15.478C92.0475 14.521 91.2555 13.762 90.3095 13.762C89.3745 13.762 88.5935 14.521 88.5935 15.478ZM93.7195 19.339C93.7195 18.778 94.1375 18.36 94.6655 18.36C95.2155 18.36 95.6225 18.778 95.6225 19.339C95.6225 19.9 95.2155 20.318 94.6655 20.318C94.1375 20.318 93.7195 19.9 93.7195 19.339ZM92.9495 19.339C92.9495 20.296 93.7305 21.055 94.6655 21.055C95.6115 21.055 96.4035 20.296 96.4035 19.339C96.4035 18.382 95.6115 17.623 94.6655 17.623C93.7305 17.623 92.9495 18.382 92.9495 19.339ZM90.3425 21L95.4795 13.872H94.6325L89.4735 21H90.3425ZM102.709 15.577C101.191 15.577 100.069 16.743 100.069 18.36C100.069 19.988 101.191 21.154 102.709 21.154C104.227 21.154 105.349 19.988 105.349 18.36C105.349 16.743 104.227 15.577 102.709 15.577ZM102.709 16.369C103.655 16.369 104.469 17.084 104.469 18.36C104.469 19.647 103.655 20.362 102.709 20.362C101.763 20.362 100.949 19.647 100.949 18.36C100.949 17.084 101.763 16.369 102.709 16.369ZM107.586 17.898C107.586 17.073 108.059 16.369 108.906 16.369C109.863 16.369 110.215 16.985 110.215 17.755V21H111.095V17.623C111.095 16.479 110.479 15.577 109.214 15.577C108.521 15.577 107.905 15.907 107.564 16.523V15.731H106.706V21H107.586V17.898ZM115.57 18.228V17.458H112.633V18.228H115.57ZM119.423 16.369C120.369 16.369 120.798 17.018 120.941 17.579L121.733 17.238C121.513 16.402 120.776 15.577 119.423 15.577C117.938 15.577 116.816 16.721 116.816 18.36C116.816 19.966 117.916 21.154 119.434 21.154C120.787 21.154 121.524 20.296 121.777 19.515L121.007 19.174C120.853 19.658 120.435 20.362 119.434 20.362C118.499 20.362 117.696 19.625 117.696 18.36C117.696 17.084 118.499 16.369 119.423 16.369ZM123.914 17.854C123.914 17.04 124.398 16.369 125.234 16.369C126.191 16.369 126.543 16.985 126.543 17.755V21H127.423V17.623C127.423 16.479 126.807 15.577 125.542 15.577C124.86 15.577 124.255 15.885 123.914 16.435V13.047H123.034V21H123.914V17.854ZM128.697 19.603C128.697 20.406 129.346 21.154 130.435 21.154C131.381 21.154 131.953 20.637 132.184 20.208C132.184 20.615 132.228 20.879 132.25 21H133.108C133.075 20.835 133.042 20.56 133.042 20.12V17.458C133.042 16.435 132.415 15.577 130.919 15.577C129.786 15.577 128.906 16.259 128.796 17.26L129.632 17.458C129.709 16.787 130.171 16.325 130.941 16.325C131.766 16.325 132.162 16.776 132.162 17.37C132.162 17.601 132.074 17.766 131.689 17.821L130.27 18.03C129.346 18.162 128.697 18.679 128.697 19.603ZM130.545 20.406C129.94 20.406 129.577 19.988 129.577 19.559C129.577 19.042 129.94 18.756 130.446 18.679L132.162 18.426V18.778C132.162 19.9 131.458 20.406 130.545 20.406ZM135.58 21V15.731H134.7V21H135.58ZM134.48 13.652C134.48 14.015 134.777 14.312 135.14 14.312C135.503 14.312 135.8 14.015 135.8 13.652C135.8 13.289 135.503 12.992 135.14 12.992C134.777 12.992 134.48 13.289 134.48 13.652ZM138.179 17.898C138.179 17.073 138.652 16.369 139.499 16.369C140.456 16.369 140.808 16.985 140.808 17.755V21H141.688V17.623C141.688 16.479 141.072 15.577 139.807 15.577C139.114 15.577 138.498 15.907 138.157 16.523V15.731H137.299V21H138.179V17.898Z"
                fill="black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1810_46"
                  x1="33.5294"
                  y1="7.20588"
                  x2="47.888"
                  y2="74.0171"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ED1E79" />
                  <stop offset="1" stopColor="#522785" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1810_46"
                  x1="44.7958"
                  y1="13.6484"
                  x2="62.2866"
                  y2="31.4386"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.21" stopColor="#F15A24" />
                  <stop offset="0.6841" stopColor="#FBB03B" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1810_46"
                  x1="31.2044"
                  y1="35.3515"
                  x2="13.7136"
                  y2="17.5614"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.21" stopColor="#ED1E79" />
                  <stop offset="0.8929" stopColor="#522785" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;