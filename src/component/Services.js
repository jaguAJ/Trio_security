import web from "../assets/web.png";
import ui from "../assets/ui.png";
import ux from "../assets/ux.png";
import sb from "../assets/sb.png";
import styles from "./Services.module.css"; // Import CSS module

function Services() {
  return (
    <div className="bg-[#fafafa] flex flex-col items-center max-w-full mx-auto mb-[12rem] sm:flex-col md:flex-row gap-[4rem]">
      <div className="grid grid-cols-2 gap-[3rem] md:gap-[4rem]">
        {/* Web Development Box */}
        <div className={`${styles.serviceBox} ${styles.serviceBoxHover}`}>
          <img
            src={web}
            alt="web"
            className={`${styles.serviceImg} mt-[0.2rem] sm:mt-[1.6rem] md:mt-[2.6rem]`}
          />
          <h2 className={styles.serviceTitle}>WEB DEVELOPMENT</h2>
        </div>

        {/* Digital Marketing Box */}
        <div className={`${styles.serviceBox} ${styles.serviceBoxHover}`}>
          <img
            src={ui}
            alt="ui"
            className={`${styles.serviceImg} mt-[1.2rem] sm:mt-[1.6rem] md:mt-[2.6rem]`}
          />
          <h2 className={styles.serviceTitle}>DIGITAL MARKETING</h2>
        </div>

        {/* UI/UX Design Box */}
        <div className={`${styles.serviceBox} ${styles.serviceBoxHover}`}>
          <img
            src={ux}
            alt="ux"
            className={`${styles.serviceImg} mt-[1.6rem] sm:mt-[1.6rem] md:mt-[2.6rem]`}
          />
          <h2 className={styles.serviceTitle}>UI/UX DESIGN</h2>
        </div>

        {/* Software Building Box */}
        <div className={`${styles.serviceBox} ${styles.serviceBoxHover}`}>
          <img
            src={sb}
            alt="sb"
            className={`${styles.serviceImg} mt-[1rem] sm:mt-[1.6rem] md:mt-[2.6rem]`}
          />
          <h2 className={styles.serviceTitle}>SOFTWARE BUILDING</h2>
        </div>
      </div>
    </div>
  );
}

export default Services;
