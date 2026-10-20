import React from "react";
import styles from "./OrbitingCircles.module.css";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  style,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const count = React.Children.count(children);

  return (
    <div
      className={styles.orbitContainer}
      style={{
        width: radius * 2 + iconSize,
        height: radius * 2 + iconSize,
        ...style,
      }}
      {...props}
    >
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.orbitPath}
          viewBox={`0 0 ${radius * 2 + 4} ${radius * 2 + 4}`}
        >
          <circle
            className={styles.orbitCircle}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = count > 0 ? (360 / count) * index : 0;
        return (
          <div
            style={
              {
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
                "--icon-size": `${iconSize}px`,
                animationDirection: reverse ? "reverse" : "normal",
              } as React.CSSProperties
            }
            className={`${styles.orbitItem} ${className || ""}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default OrbitingCircles;
