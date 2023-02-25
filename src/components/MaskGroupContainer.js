import { useMemo } from "react";
import styles from "./MaskGroupContainer.module.css";

const MaskGroupContainer = ({ maskGroupImageUrl, propLeft }) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.groupChild} />
      <div className={styles.groupItem} />
      <div className={styles.newPatientFolderContainer}>
        <p className={styles.new}>{`NEW `}</p>
        <p className={styles.new}>PATIENT</p>
        <p className={styles.new}>{`FOLDER `}</p>
        <p className={styles.new}>{`UPLOAD `}</p>
        <p className={styles.new}>{`REPORT `}</p>
        <p className={styles.new}>SETTING</p>
        <p className={styles.new}>LOGOUT</p>
      </div>
      <img className={styles.maskGroupIcon} alt="" src={maskGroupImageUrl} />
      <div className={styles.div}>+</div>
      <img className={styles.image897Icon} alt="" src="../image-897@2x.png" />
      <img className={styles.image898Icon} alt="" src="../image-898@2x.png" />
      <img className={styles.image899Icon} alt="" src="../image-899@2x.png" />
      <img className={styles.image900Icon} alt="" src="../image-900@2x.png" />
      <img className={styles.image901Icon} alt="" src="../image-901@2x.png" />
      <img className={styles.image902Icon} alt="" src="../image-902@2x.png" />
    </div>
  );
};

export default MaskGroupContainer;
