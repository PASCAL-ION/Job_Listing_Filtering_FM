import { StyledCard } from "./styledComponents/Card.styled"

type CardProps = {
  company: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
  featured: boolean;
  new: boolean;
}

export default function Card({
  company, 
  position,
  postedAt,
  contract,
  location,
  languages,
  tools,
  featured,
  new: isNew
}:CardProps) {


  return (
    <StyledCard>
      <div>
        {company}
        {featured && <span>FEATURED</span>}
        {isNew && <span>New</span>}
      </div>
      <h1>{position}</h1>
      <ul>
        <li>{postedAt}</li>
        <li>{contract}</li>
        <li>{location}</li>
      </ul>
      <hr />
      <ul>
        {languages.map((language, index) => (
          <li key={`language-${index}`}>{language}</li>
        ))}
        {tools.map((tool, index) => (
          <li key={`tool-${index}`}>{tool}</li>
        ))}
      </ul>
    </StyledCard>
  )
}

