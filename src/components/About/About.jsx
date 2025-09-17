import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import about from "../../assets/about.gif";


/* ------------------ Data ------------------ */
const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "60%" },
  { name: "React", level: "65%" },
  { name: "Node.js", level: "80%" },
  { name: "Express.js", level: "80%" },
  { name: "MongoDB", level: "80%" },
  { name: "Git & GitHub", level: "70%" },
  { name: "Responsive Design", level: "85%" },
];

const achievements = [
  { value: 2, label: "Years of Experience", suffix: "+" },
  { value: 20, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Happy Clients", suffix: "+" },
];

/* ------------------ Hooks ------------------ */
// Counter animation hook
const useCounter = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!startCounting) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
        setFinished(true);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, startCounting]);

  return { count, finished };
};

// Skill bar animation hook
const useSkillAnimation = (level, startAnimating = false, duration = 1500) => {
  const [width, setWidth] = useState("0%");
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (!startAnimating) return;

    let startTimestamp = null;
    const target = parseInt(level);

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const animatedValue = Math.floor(progress * target);

      setWidth(`${animatedValue}%`);
      setPercentage(animatedValue);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [level, startAnimating, duration]);

  return { width, percentage };
};

/* ------------------ Component ------------------ */
const About = () => {
  const achievementsRef = useRef(null);
  const skillsRef = useRef(null);

  const [startCounter, setStartCounter] = useState(false);
  const [startSkills, setStartSkills] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Observe achievements
    const observerAchievements = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
          observerAchievements.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (achievementsRef.current) {
      observerAchievements.observe(achievementsRef.current);
    }

    // Observe skills
    const observerSkills = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartSkills(true);
          observerSkills.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) {
      observerSkills.observe(skillsRef.current);
    }

    return () => {
      observerAchievements.disconnect();
      observerSkills.disconnect();
    };
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-container">
        {/* Header */}
        <div className="about-header" data-aos="fade-up">
          <h1>About Me</h1>
          <div className="about-underline"></div>
        </div>

        {/* About Section */}
        <div className="about-section">
          {/* Left */}
          <div className="about-left" data-aos="fade-right">
            <div className="profile-container">
              <img src={about} alt="Profile" className="profile-img" />
              <div className="profile-overlay"></div>
            </div>
          </div>

          {/* Right */}
          <div className="about-right" data-aos="fade-left">
            <div className="about-para">
              <p>
                Hello! I'm a passionate web developer focused on building
                dynamic and user-friendly applications.
              </p>
              <p>
                I love turning ideas into reality through clean, efficient, and
                scalable code.
              </p>
            </div>

            {/* Skills */}
            <div className="about-skills" ref={skillsRef}>
              <h2>My Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => {
                  const { width, percentage } = useSkillAnimation(
                    skill.level,
                    startSkills
                  );
                  return (
                    <div className="skill" key={index}>
                      <div className="skill-label">
                        <span>{skill.name}</span>
                        <span className="skill-percentage">
                          {percentage}%
                        </span>
                      </div>
                      <div className="skill-bar-bg">
                        <div
                          className="skill-bar-fill"
                          style={{ width }}
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="about-achievements"
          ref={achievementsRef}
          data-aos="fade-up"
        >
          {achievements.map((item, index) => {
            const { count, finished } = useCounter(
              item.value,
              2000,
              startCounter
            );
            return (
              <div className="achievement-card" key={index}>
                <div className="achievement-value">
                  {count}
                  {finished && item.suffix}
                </div>
                <div className="achievement-label">{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Background Shapes */}
      <div className="about-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default About;
