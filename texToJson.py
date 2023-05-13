# read from 

import requests
import json

URL = "https://raw.githubusercontent.com/jojonicho/jojonicho/master/main.tex"

def main():
    r = requests.get(URL)
    txt = r.text
    
    bob = txt.split("%-----------EXPERIENCE-----------")[1].split("%-----------PROJECTS-----------")[0]

    '''
        \resumeSubheading
          {Software Engineer Intern} {Jul 2020 -- Sep 2020}
          {\href{https://mekari.com/}{Mekari.com}}{Jakarta, Indonesia}
          \resumeItemListStart
            \resumeItem{Developed and automated Backend using Python, Selenium, and AWS (Amplify, Lambda, Secrets Manager, S3, SES).}
            \resumeItem{Utilized Docker, AWS-CLI, and serverless CLI to create and deploy AWS Lambda dependency layers.}
            % \resumeItem{Implemented access management Frontend using React and Typescript, including a custom UI kit.}
          \resumeItemListEnd
    '''

    # remove leading whitespace
    bob = "\n".join([line.strip() for line in bob.split("\n")])
    
    # remove lines starting with %
    bob = "\n".join([line for line in bob.split("\n") if not line.startswith("%")])

    experiences = bob.split("\\resumeSubheading")[1:]

    '''
    transform this:

    {Software Engineer Intern} {Sep 2020 -- Mar 2021}
    {\href{https://oyindonesia.com}{OY Indonesia}}{Jakarta, Indonesia}
    \resumeItemListStart
    \resumeItem{Increased revenue by 30\% by developing end-to-end Promo Code feature using Flutter with BloC state management.}
    \resumeItem{Applied Data Access Object(DAO) and Model Controller Service(MCS) Design Patterns in Java Backend architecture.}
    \resumeItem{Utilized RabbitMQ for publishing and consuming events to validate user eligibility on promo codes and rewards.}
    \resumeItemListEnd

    into this:
    {
      "company": "OY! Indonesia",
      "position": "Software Engineer Intern",
      "src": "./oy.png",
      "startDate": "Sep 2020",
      "endDate": "Dec 2020",
      "highlights": [
        "Applied Java conventions such as DAO (Data Access Object) and MCS (Model, Controller, Service) Backend architecture.",
        "Created unit tests and mock tests on top of validation middlewares with RabbitMQ schedulers for Backend API.",
        "Implemented multi-step form and data table Frontend using React, Typescript, and OY’s Fortune UI.",
        "Developed end-to-end Promo Code feature on the mobile app using Flutter with BloC state management."
      ]
    },

    '''

    formattedExperiences = []
    for exp in experiences:
        if exp == "":
            continue
        exsplit = exp.split("}")

        position = exsplit[0].split("{")[1]
        company = exsplit[3].split("{")[1]
        # if ends with .com, erase
        if company.endswith(".com"):
            company = company.split(".com")[0]

        startDate = exsplit[1].split("--")[0].strip().split("{")[1]
        endDate = exsplit[1].split("--")[1].strip()
        highlights = exp.split("\\resumeItemListStart")[1].split("\\resumeItemListEnd")[0].split("\\resumeItem")[1:]

        # {\\href{https://dekoruma.com/artikel}{dekoruma.com/artikel}}
        # replace with dekoruma.com/artikel
        
        temp = []

        for idx, h in enumerate(highlights):
            # if there is \\href{
            if "href{" in h:
                prev = h.split("{\\href{")[0]
                textLink = h.split("{\\href{")[1]
                textLink = textLink.split("{")[1]

                temp.append(prev + textLink)
            else:
                temp.append(h)
        highlights = temp

        highlights = [highlight.split("\\href{")[1] if highlight.startswith("{\\href{") else highlight for highlight in highlights]
        

        # remove \n and { and }
        highlights = [highlight.replace("\n", "") for highlight in highlights]
        highlights = [highlight.replace("{", "") for highlight in highlights]
        highlights = [highlight.replace("}", "") for highlight in highlights]
        highlights = [highlight.replace("\\", "") for highlight in highlights]

        cur = {
            "company": company,
            "position": position,
            "src": "./" + company.lower().replace(" ", "") + ".png",
            "startDate": startDate,
            "endDate": endDate,
            "highlights": highlights
        }
        print(cur)
        formattedExperiences.append(cur)

    finalJson = {
        "node": formattedExperiences
    }
    finalJson = json.dumps(finalJson, indent=2)
    
    with open("static/experiences/experiences.json", "w") as f:
        f.write(finalJson)

if __name__ == "__main__":
    main()

