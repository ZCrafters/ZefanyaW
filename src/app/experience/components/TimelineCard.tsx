"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Zap } from "lucide-react";
import type { ExperienceItem } from "@/types/portfolio";
import { getIcon } from "@/lib/icons";

export default function TimelineCard({ item, index }: { item: ExperienceItem; index: number }) {
  const isLeft = index % 2 === 0;
  const Icon = getIcon(item.icon);

  return (
    <motion.article
      className={`experience-entry ${isLeft ? "is-left" : "is-right"}`}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="experience-entry-node" aria-hidden="true">
        <span />
      </div>
      <div className="experience-entry-connector" aria-hidden="true" />

      <motion.div
        className="experience-entry-card"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        {item.featured && (
          <span className="experience-entry-featured">
            <Sparkles className="h-3.5 w-3.5" /> Featured role
          </span>
        )}

        <div className={`experience-entry-accent bg-gradient-to-r ${item.color}`} />
        <div className="experience-entry-head">
          <span className={`experience-entry-icon bg-gradient-to-br ${item.color}`}>
            <Icon className="h-6 w-6" />
          </span>
          <div className="experience-entry-title">
            <span className="experience-entry-period">
              <Calendar className="h-3.5 w-3.5" /> {item.period}
            </span>
            <h3>{item.title}</h3>
            <p>{item.company}</p>
          </div>
        </div>

        <p className="experience-entry-description">{item.description}</p>

        <div className="experience-entry-achievements">
          {item.achievements.map((achievement, achievementIndex) => (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, x: isLeft ? -12 : 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: achievementIndex * 0.06, duration: 0.35 }}
            >
              <Zap className="h-4 w-4" />
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>

        <div className="experience-entry-skills">
          {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </motion.div>

      <div className="experience-entry-aside">
        <span>0{index + 1}</span>
        <div>
          <strong>{item.company}</strong>
          <small><MapPin className="h-3 w-3" /> {item.location}</small>
        </div>
      </div>
    </motion.article>
  );
}
