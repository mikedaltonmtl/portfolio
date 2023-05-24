import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    url: "/NBC.jpg",
    companyName: "National Bank Financial",
    jobTitle: "Analyst, Reconciliation",
    duration: "Sep 2010 - May 2013",
    summary: [
      "Production, development and automation of reconciliation and trading reports.",
      "Analysis and resolution of discrepancies between accounting and auxiliary systems.",
      "Creation of dashboard tools to improve the management of reports across the reconciliation group.",
    ]
  },
  {
    url: "/CDP.avif",
    companyName: "Caisse de dépôt et placement du Québec",
    jobTitle: "Analyst, Corporate Actions",
    duration: "Nov 2007 - Sep 2010",
    summary: [
      "Processing Corporate Actions affecting holdings of the Caisse.",
      "Daily liaison with Portfolio Managers to coordinate responses to voluntary actions and to advise of upcoming events",
      "Verification and reconciliation of activity with custodian and counterparties.",
    ]
  },
  {
    url: "/RBC.png",
    companyName: "RBC Direct Investing",
    jobTitle: "Investment Services Representative",
    duration: "Oct 2006 - Oct 2007",
    summary: [
      "Answering customer service and trading inquiries in fast-paced call center environment.",
      "Providing information on market activity, products and customer accounts.",
      "Working with customers to assist them in executing trades.",
    ]
  },
  {
    url: "/ISI.png",
    companyName: "ISI",
    jobTitle: "Junior Developer",
    duration: "Jan 2005 - Jul 2006",
    summary: [
      "Production of Web-based applications involving the development of eCommerce Web sites.",
      "Database optimisation and management.",
      "Improvement and troubleshooting of existing projects.",
      "Skills: Java, PHP, CSS, HTML, SQL"
    ]
  },
];

export default function Experience() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="ml-3 flex flex-col relative min-h-screen text-left overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="pageName">
        &nbsp;Experience
      </h3>

      <div className="w-[500px] h-screen pt-[120px] md:pt-32 flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-thumb-rounded-[5px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40">
        {experiences?.map(experience => (
          <ExperienceCard
            key={experience.url}
            experience={experience}
          />
        ))}
      </div>
    </motion.div>
  );
}