import styles from "@/app/home.module.css";

export function DeviceOutline() {
  return (
    <svg className={styles.deviceDrawing} viewBox="0 0 760 600" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        <path className={styles.draw} pathLength="1" d="M172 445V44c0-14 10-24 24-24h756c14 0 24 10 24 24v401H172Z" />
        <path className={styles.draw} pathLength="1" d="M190 445V46h767v399M173 468h803" />
        <circle className={styles.draw} pathLength="1" cx="553" cy="34" r="3" />
        <path className={styles.draw} pathLength="1" d="M172 468 72 570c-4 5-2 12 5 14h989c7-2 9-9 5-14l-95-102M77 584v11c0 7 18 11 35 11h918c17 0 36-4 36-11v-11" />
        <g className={styles.keyboard} strokeWidth="1.3">
          {Array.from({ length: 42 }, (_, key) => {
            const row = Math.floor(key / 14);
            const col = key % 14;
            const x = 195 + col * 51 - row * 9;
            const y = 484 + row * 21;
            return <path key={key} className={styles.draw} pathLength="1" d={`M${x} ${y}h43l7 15h-50Z`} />;
          })}
          <path className={styles.draw} pathLength="1" d="M202 547h141M636 547h270M358 539h251l17 33H341Z" />
        </g>
        <rect x="17" y="157" width="181" height="366" rx="25" fill="#151515" stroke="none" />
        <rect className={styles.drawPhone} pathLength="1" x="17" y="157" width="181" height="366" rx="25" />
        <rect className={styles.drawPhone} pathLength="1" x="22" y="161" width="171" height="358" rx="21" strokeOpacity=".65" strokeWidth="1" />
        <rect className={styles.drawPhone} pathLength="1" x="80" y="168" width="49" height="14" rx="7" strokeWidth="1.2" />
        <path className={styles.drawPhone} pathLength="1" d="M14 224v24M14 267v44M201 288v31" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
