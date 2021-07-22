import React from "react";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    paddingTop: "30px",
    width: "50%",
    margin: "0 auto",
    color: "#fff !important",
    "& ul": {
      letterSpacing: "0.5px"
    }
  },
  date: {
    color: "#fff",
    fontWeight: "600",
    marginTop: "5px",
    letterSpacing: "1px",
    fontWeight: "500",
  },
  jobTitle: {
    marginBottom: "0px",
    letterSpacing: "1px"
  },
  description: {
    fontWeight: "500",
    color: "#fff",
    letterSpacing: "0.5px"
  },
  experienceLineItem: {
    marginBottom: "30px"
  },
  section: {
    marginTop: "70px"
  },
  headerTitle: {
    fontWeight: "500",
    letterSpacing: "4px",
  },
  educationLineItem: {
    marginBottom: "30px",
  },
  educationTopLine: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between"
  },
  educationTitle: {
    color: "#fff",
    fontWeight: "500",
    margin: "0px"
  },
  educationDate: {
    color: "#fff",
    margin: "0px",
    fontWeight: "500"
  },
  educationLocation: {
    color: "#fff",
    fontStyle: "italic",
    marginTop: "0px",
  }
})

function Header({ title }) {
  const classes = useStyles()
  return (
    <>
      <h3 className={classes.headerTitle}>{title}</h3>
      <hr color="#fff" />
    </>
  )
}

function ExperienceLineItem({ jobTitle, date, children }) {
  const classes = useStyles()

  return (
    <div className={classes.experienceLineItem}>
      <h3 className={classes.jobTitle}>{jobTitle}</h3>
      <p className={classes.date}>{date}</p>
      {children}
    </div>
  )
}

function EducationLineItem({ title, date, location }) {
  const classes = useStyles()

  return (
    <div className={classes.educationLineItem}>
      <div className={classes.educationTopLine}>
        <p className={classes.educationTitle}>{title}</p>
        <p className={classes.educationDate}>{date}</p>
      </div>
      <p className={classes.educationLocation}>{location}</p>
    </div>
  )
}

export default function Resume() {
  const classes = useStyles()

  return (
    <div className={classes.container}>

      <section className={classes.section}>
        <Header title="EDUCATION" />

        <EducationLineItem
          title="Bachelor of Applied Computer Science"
          date="September 2016 - May 13, 2020"
          location="Dalhousie University, Halifax, NS" />

        <EducationLineItem
          title="Diploma - Database Development"
          date="September 2014 - June, 2016"
          location="NSCC Institute of Technology, Halifax, NS" />

        <EducationLineItem
          title="Diploma – High School"
          date="September 2009 - June, 2013"
          location="Bridgewater Junior/Senior High School, Bridgwater, NS" />
      </section>

      <section className={classes.section}>
        <Header title="SKILLS" />
      </section>

      <section className={classes.section}>
        <Header title="PROFESSIONAL EXPERIENCE" />

        <ExperienceLineItem
          jobTitle="Lead Developer, Tranquility Online"
          date="Jan 2012 - Present">
          <>
            <p className={classes.description}>
              Team lead & full stack development for Cognitive Behavioural Therapy (CBT) 
              company with the goal of helping individuals get help with 
              anxiety. Web-based application using microservices written in 
              Golang, client-side using ReactJS.
            </p>
            <ul>
              <li>React</li>
              <li>Golang</li>
              <li>Postgres</li>
              <li>Agile</li>
              <li>Jira</li>
            </ul>
          </>
        </ExperienceLineItem>

        <ExperienceLineItem
          jobTitle="Front-End Developer, Freelance"
          date="March 2021 - April 2021">
          <>
            <p className={classes.description}>
              Created a cloud-based landing page for a local startup.
            </p>
            <ul>
              <li>Lambda</li>
              <li>SES</li>
              <li>RDS</li>
              <li>Gatsby</li>
              <li>Wordpress</li>
            </ul>
          </>
        </ExperienceLineItem>

        <ExperienceLineItem
          jobTitle="Teacher Assistant"
          date="Jan 2017 - May 2018">
          <>
            <p className={classes.description}>
              Help create curriculum and lecture during labs. Help students throughout the day
              and guest-lecture on request.
            </p>
            <ul>
              <li>Mobile Computing</li>
              <li>Server side scripting</li>
              <li>Data Structures & Algorithms</li>
              <li>Advanced Database Development</li>
              <li>Data Analytics</li>
            </ul>
          </>
        </ExperienceLineItem>

        <ExperienceLineItem
          jobTitle="Business Intelligence"
          date="Sept 2017 - Dec 2017">
          <>
            <p className={classes.description}>
              Emera Energy is a natural gas and power marketing and trading company -- my role
              was to create reports to give insights various teams in the company to
              help them make data-driven decisions. Processed data captured via pipeline 
              sensors and third-party vendors. Heavy SQL-based development through 
              time-series metrics.
            </p>
            <ul>
              <li>SSRS</li>
              <li>SSIS</li>
              <li>SSAS</li>
              <li>SQL</li>
              <li>MSSQL</li>
              <li>MySQL</li>
            </ul>
          </>
        </ExperienceLineItem>

        <ExperienceLineItem
          jobTitle="Full-stack developer"
          date="Apr 2015 - Apr 2016">
          <>
            <p className={classes.description}>
              Streamlining the process of old, and current print jobs through an 
              online interface. Eliminating the use of paper. 
              Saving money on copyright costs.
            </p>
            <ul>
              <li>Laravel</li>
              <li>MaterialUI</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </>
        </ExperienceLineItem>
      </section>

    </div>
  )
}