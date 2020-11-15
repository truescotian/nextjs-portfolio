import React from "react";
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    maxWidth: "1050px",
    margin: "0 auto",
    padding: "20px",
    "& p": {
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.7)"
    },
    "& ul": {
      fontWeight: "300",
      color: "rgba(255, 255, 255, 0.7)"
    }
  },
  h1: {
    margin: "50px auto",
    marginBottom: "20px",
    fontFamily: "Moderat",
    fontWeight: "500",
    fontSize: "20px",
    letterSpacing: "1.5px",
    color: "#d9e8ed"
  },
  h2: {
    margin: "50px auto",
    marginBottom: "16px",
    fontFamily: "Moderat",
    fontWeight: "500",
    fontSize: "20px",
    letterSpacing: "1.5px",
    color: "#d5d6d7"
  },
})

export default function MyStory() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>WHO AM I</h1>

      <p>
        I'm a web developer from Halifax, NS. I hold a diploma
        from the Nova Scotia Community College (NSCC) in Data Applications Programming, and
        a degree in Applied Computer Science (BACS) from Dalhousie University.
      </p>

      <h1 className={classes.h1}>MY STORY</h1>

      <h2 className={classes.h2}>Hometown</h2>

      <p>
        I'm originally from Bridgewater, Nova Scotia. I went to Bridgewater High School, and
        is where I had my first job: newspaper delivery. As a kid I was heavily interested
        in skateboarding and BMX, and video games (WoW, Runescape, Diablo, Warcraft series).
      </p>

      <h2 className={classes.h2}>2011-2013 - High School</h2>

      <p>
        In High School grade 11, I thought programming sounded cool, however out of my reach of brain power.
        I decided that I couldn't program before I had even tried to program, so I aimed for a general IT job.
        After a month, I decided to job shadow the IT department in the local hospital. Thankfully during
        the job-shadowing, I found that I never wanted a regular IT job. All of the people there were playing
        fantasy football, and the only task that I saw had to be done was a printer broke, which they replaced.
        Very boring.
      </p>

      <p>
        Fast forward a month, I gave it more thought and decided I wanted to enter Computer Science at
        Acadia in Wolfville, NS. Problem was, I was starting grade 12, and had no advanced math
        even though it was required for CS. But I really wanted it, so I had to take advanced math 11
        pre-calculus, and advanced math 12 all in one semester (along with the regular courseload).
        I never thought I was good at math, but after finishing all of the math courses I found that I
        may be able to actually do CS. To get in to CS, I needed to take a calculus test. 
        I passed that and got in.
      </p>

      <h2 className={classes.h2}>2014 - Acadia</h2>

      <p>
        Fast forward a few months, I'm in a solo dorm at Acadia taking Computer Science. I didn't like the
        partying, and instantly didn't fit in well. This took a hit on my mental health, and come exams
        I was doing terribly mentally and decided to drop out. Now I'm back in Bridgewater.
      </p>

      <h2 className={classes.h2}>2015 - Post-Dropout</h2>

      <p>
        Parents weren't very pleased, but I never want to disappoint people around me. I got a job at The
        Source and found a great group of friends, and worked there for a year while deciding what I wanted
        to do next. In year, I decided that I would never work retail again, I still loved tech, I loved 
        programming, and I wanted to engineer and create things for the rest of my life. So I went to 
        NSCC in Halifax, taking Data Application Programming. This went great, the atmosphere was much
        more welcoming than my experience at Acadia. People were more interested in schooling instead of
        partying, peers were older in age, and I fit in. I graduated from NSCC, and decided I wanted
        to know more about CS at a deeper level.
      </p>

      <h2 className={classes.h2}>2015-2016 - NSCC</h2>

      <p>
        So I went to Dalhousie and took Computer Science. In hindsight, the program wasn't great and I didn't
        learn many new concepts that I didn't learn at NSCC. However, I did find many new friends and solidified
        what I was interested in. I took the co-op program at Dalhousie to get more practical experience
        before entering the work world.
      </p>

      <h2 className={classes.h2}>2016-2020 - Dalhousie</h2>

      <p>
        During the co-op interviews, I was told you were lucky to get 2 interviews, but some people would get
        5 if they were good. People were really lucky if they got to choose where they could work. I guess 
        this is because there were so many students in co-op, but jobs were a little scarce. So I got 
        18 interviews. It was pretty stressful, but I got really good at interviewing and started to enjoy
        them near the end and was able to connect with the interviewer very well. I was offered 8 positions,
        which turned out to be an issue at Dalhousie because many employers were waiting for my response,
        so the other students would be picked as a second option. It was a really good, confirming feeling about
        my position in my career.
      </p>

      <p>
        I took a co-op at Emera Energy, an energy trading company, and my title was Business Intelligence Developer.
        I had to dress up every day which was fun. It was smaller subset of Emera that moved fairly fast,
        and my team was great. I learned about power grids, energy usage, and wrote TONS of SQL. My
        favourite part of the job was being able to sit and code, every day, and my boss trusted me enough
        that I knew what I was doing, so he didn't need to manage me much. The data I worked with was on
        the millisecond-level and were small devices in pipelines measuring the energy flow. We had tons of
        data, so the queries I worked with contained billions of records, so there was a lot of optimization to be 
        done.
      </p>

      <h2 className={classes.h2}>2020 - Tranquility</h2>
      
      <p>
        At the end of my co-op, someone that interviewed me for a mentorship program contacted me, asking
        if I wanted to be their developer for a start-up. I accepted, even though there was no pay. It sounded
        like a good idea. This company is Tranquility. I've been the sole developer for Tranquility for 3 years,
        leading the development of a web application, and as of the last 2 years we've taken on two more 
        developers that I've been leading. The development of this application involved many sleepless nights,
        and is the core reason for my work ethic.
      </p>

      <h2 className={classes.h2}>Work Ethic</h2>

      <p>
        I believe a proper developer must deeply understand best-practices of the technology they are working with, 
        how the technology was built, why the technology was built, the Software Development Lifecycle, and have 
        working knowledge of all parts of their application, not only their own role.
      </p>

      <h1 className={classes.h1}>MY FUTURE</h1>

      <p>
        I'd love to see Tranquility take off and be a real success, it would be a great feeling to have built it from
        the ground up and be used by millions of people. In the future, I can see myself going two separate routes:
        becoming an expert backend-developer, or a VR game developer.
      </p>

    </div>
  )
}