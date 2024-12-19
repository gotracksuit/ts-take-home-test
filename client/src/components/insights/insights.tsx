import { Trash2Icon } from "lucide-react";
import { cx } from "../../lib/cx.ts";
import styles from "./insights.module.css";

type Insight = {
  date: Date;
  brandId: number;
  text: string;
};

type InsightsProps = {
  insights: Insight[];
  className?: string;
};

export const Insights = ({ insights, className }: InsightsProps) => {
  const deleteInsight = () => undefined;

  return (
    <div className={cx(className)}>
      <h1 className={styles.heading}>Insights</h1>
      <div className={styles.list}>
        {insights?.length ? (
          insights.map(({ text, date, brandId }) => (
            <div className={styles.insight} key={brandId}>
              <div className={styles["insight-meta"]}>
                <span>Brand ID: {brandId}</span>
                <div className={styles["insight-meta-details"]}>
                  <span>{date.toLocaleDateString()}</span>
                  <Trash2Icon
                    className={styles["insight-delete"]}
                    onClick={deleteInsight}
                  />
                </div>
              </div>
              <p className={styles["insight-content"]}>{text}</p>
            </div>
          ))
        ) : (
          <p>We have no insight!</p>
        )}
      </div>
    </div>
  );
};
