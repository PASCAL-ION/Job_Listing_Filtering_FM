import { useEffect, useState } from "react";
import Skill from "./Skill";
import { StyledCard } from "./styledComponents/Card.styled";
import { CompanyNameStyled } from "./styledComponents/CompanyName.styled";
import { FlexLayout } from "./styledComponents/FlexStyles/FlexLayout.styled";
import { FlexRow } from "./styledComponents/FlexStyles/FlexRow.styled";
import { JobMetaInfostyled } from "./styledComponents/JobMetaInfo.styled";
import { NewFeaturedTagGroupStyled } from "./styledComponents/NewFeaturedTagGroup.styled";

type CardProps = {
  company: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  featured: boolean;
  new: boolean;
  logo: string;
};

export default function Card({
  company,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  featured,
  new: isNew,
  logo,
}: CardProps) {
  const [skillsArray, setSkillsArray] = useState<string[]>([]);

  useEffect(() => {
    const array = [role, level, ...languages, ...tools];
    setSkillsArray(array);
  }, [role, level, languages, tools]);

  return (
    <StyledCard>
      <FlexLayout>
        <FlexLayout>
          <div>
            <img src={logo} alt="company logo" />
          </div>
          <div>
            <FlexRow>
              <CompanyNameStyled>{company}</CompanyNameStyled>
              <NewFeaturedTagGroupStyled featured={featured} isNew={isNew}>
                <span>{isNew && <>NEW!</>}</span>
                <span>{featured && <>FEATURED</>}</span>
              </NewFeaturedTagGroupStyled>
            </FlexRow>
            <h1>{position}</h1>
            <JobMetaInfostyled>
              <li>{postedAt}</li>
              <li>{contract}</li>
              <li>{location}</li>
            </JobMetaInfostyled>
          </div>
        </FlexLayout>
        <hr />
        <ul>
          {skillsArray.map((item, index) => (
            <Skill key={`item-${index}`} item={item} />
          ))}
        </ul>
      </FlexLayout>
    </StyledCard>
  );
}
