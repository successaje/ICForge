import styles from "../styles/carnistercard.module.scss";

const CarnisterCard = ({ data }) => {
  return (
    <div className={styles.carnister_card__container}>
      <div className={styles.cc_c__body}>
        <div className={styles.cc_c__body_div}>
          <svg
            width="47"
            height="47"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.3196 23.1279L35.955 18.1733L42.3391 13.16C42.5917 12.9618 42.7917 12.7045 42.9215 12.4108C43.0513 12.1171 43.1068 11.7961 43.0833 11.4758C43.0521 11.1568 42.9475 10.8494 42.7776 10.5776C42.6077 10.3058 42.3772 10.077 42.1041 9.90917L32.0383 4.17125C31.6848 3.97238 31.2783 3.88817 30.8749 3.93027C30.4714 3.97237 30.0911 4.13868 29.7862 4.40625L23.5 9.88959L17.2137 4.40625C16.9089 4.13868 16.5285 3.97237 16.1251 3.93027C15.7217 3.88817 15.3151 3.97238 14.9616 4.17125L4.89581 9.90917C4.62272 10.077 4.39221 10.3058 4.22233 10.5776C4.05245 10.8494 3.94782 11.1568 3.91664 11.4758C3.89311 11.7961 3.94868 12.1171 4.07845 12.4108C4.20822 12.7045 4.40821 12.9618 4.66081 13.16L11.045 18.1733L4.68039 23.0496C4.42421 23.2457 4.22045 23.502 4.0872 23.7958C3.95396 24.0897 3.89537 24.4118 3.91664 24.7338C3.93834 25.0553 4.03906 25.3665 4.20987 25.6398C4.38068 25.9131 4.61629 26.14 4.89581 26.3004L11.5737 30.2171V35.0542C11.5751 35.3888 11.6623 35.7175 11.8268 36.009C11.9914 36.3004 12.2279 36.5447 12.5137 36.7188L22.4816 42.8483C22.7793 43.0202 23.1171 43.1107 23.4608 43.1107C23.8046 43.1107 24.1423 43.0202 24.44 42.8483L34.4079 36.7188C34.6938 36.5447 34.9302 36.3004 35.0948 36.009C35.2594 35.7175 35.3465 35.3888 35.3479 35.0542V30.1975L42.0258 26.3788C42.3053 26.2183 42.5409 25.9914 42.7118 25.7181C42.8826 25.4449 42.9833 25.1336 43.005 24.8121C43.0354 24.4969 42.989 24.179 42.8696 23.8856C42.7502 23.5923 42.5615 23.3323 42.3196 23.1279ZM31.3333 8.26417L37.6587 11.8675L32.665 15.7842L26.79 12.1808L31.3333 8.26417ZM29.1987 18.2908L23.5 22.2075L17.8012 18.2908L23.5 14.7854L29.1987 18.2908ZM9.38039 11.8675L15.6666 8.26417L20.1904 12.1808L14.3154 15.7842L9.38039 11.8675ZM9.38039 24.3813L14.2762 20.6213L20.1512 24.6946L15.8037 28.0825L9.38039 24.3813ZM31.49 33.8988L23.5 38.8338L15.4904 33.8988V32.3321C15.7765 32.4023 16.0748 32.4071 16.363 32.3461C16.6512 32.285 16.9219 32.1598 17.155 31.9796L23.5 27.0838L29.845 31.9796C30.1868 32.2449 30.6069 32.3895 31.0396 32.3908C31.1957 32.4097 31.3535 32.4097 31.5096 32.3908L31.49 33.8988ZM31.1962 28.0238L26.8291 24.6946L32.7041 20.6213L37.6196 24.4204L31.1962 28.0238Z"
              fill="#0B0A0A"
            />
          </svg>
          <div className={styles.cc_c__body_texts}>
            <div className={styles.cc_c__body_title}>
              <h4>{data.title}</h4>
              <h5>{data.symbol}</h5>
            </div>
            <div className={styles.cc_c__body_address}>
              <p>
                Address: <span>{data.address}</span>
              </p>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 5.215C12.2439 5.16142 12.2322 5.10862 12.215 5.0575V5.005C12.187 4.94503 12.1495 4.88989 12.1042 4.84167L8.60417 1.34167C8.55595 1.2963 8.50081 1.25889 8.44083 1.23084C8.42342 1.22837 8.40575 1.22837 8.38833 1.23084C8.32908 1.19685 8.26363 1.17504 8.19583 1.16667H5.83333C5.3692 1.16667 4.92409 1.35105 4.5959 1.67923C4.26771 2.00742 4.08333 2.45254 4.08333 2.91667V3.50001H3.5C3.03587 3.50001 2.59075 3.68438 2.26256 4.01257C1.93437 4.34076 1.75 4.78588 1.75 5.25V11.0833C1.75 11.5475 1.93437 11.9926 2.26256 12.3208C2.59075 12.649 3.03587 12.8333 3.5 12.8333H8.16667C8.6308 12.8333 9.07591 12.649 9.4041 12.3208C9.73229 11.9926 9.91667 11.5475 9.91667 11.0833V10.5H10.5C10.9641 10.5 11.4092 10.3156 11.7374 9.98744C12.0656 9.65925 12.25 9.21413 12.25 8.75V5.25C12.25 5.25 12.25 5.25 12.25 5.215ZM8.75 3.15584L10.2608 4.66667H9.33333C9.17862 4.66667 9.03025 4.60521 8.92085 4.49582C8.81146 4.38642 8.75 4.23805 8.75 4.08334V3.15584ZM8.75 11.0833C8.75 11.238 8.68854 11.3864 8.57915 11.4958C8.46975 11.6052 8.32138 11.6667 8.16667 11.6667H3.5C3.34529 11.6667 3.19692 11.6052 3.08752 11.4958C2.97812 11.3864 2.91667 11.238 2.91667 11.0833V5.25C2.91667 5.0953 2.97812 4.94692 3.08752 4.83753C3.19692 4.72813 3.34529 4.66667 3.5 4.66667H4.08333V8.75C4.08333 9.21413 4.26771 9.65925 4.5959 9.98744C4.92409 10.3156 5.3692 10.5 5.83333 10.5H8.75V11.0833ZM11.0833 8.75C11.0833 8.90471 11.0219 9.05309 10.9125 9.16248C10.8031 9.27188 10.6547 9.33334 10.5 9.33334H5.83333C5.67862 9.33334 5.53025 9.27188 5.42085 9.16248C5.31146 9.05309 5.25 8.90471 5.25 8.75V2.91667C5.25 2.76196 5.31146 2.61359 5.42085 2.50419C5.53025 2.3948 5.67862 2.33334 5.83333 2.33334H7.58333V4.08334C7.58333 4.54747 7.76771 4.99259 8.0959 5.32078C8.42408 5.64896 8.8692 5.83334 9.33333 5.83334H11.0833V8.75Z"
                  fill="black"
                  fill-opacity="0.84"
                />
              </svg>
            </div>
          </div>
        </div>
        <p>
          ID: <span>{data.carnisterId}</span>
        </p>
      </div>
      <div className={styles.cc_c__footer}>
        <div className={styles.cc_c__footer_text}>
          <h5>Balance</h5>
          <p>{data.balance}</p>
        </div>
        <div className={styles.cc_c__footer_text}>
          <h5>Volume</h5>
          <p>{data.volume}</p>
        </div>
        <div className={styles.cc_c__footer_text}>
          <h5>Rate</h5>
          <p>{data.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default CarnisterCard;