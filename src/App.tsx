import { StyledCardsContainer } from './components/styledComponents/CardsContainer.styled'
import { StyledHeader } from './components/styledComponents/header.styled'
import GlobalStyle from './globalStyles'
import { useEffect, useState } from 'react'
import Card from './components/Card'

type Job = {
    id: number;
    company: string;
    logo: string;
    new: boolean,
    featured: boolean,
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[]
};

// ...

function App() {
  const [data, setData] = useState<Job[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Replace with the actual API endpoint
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <>
        <GlobalStyle />
        <StyledHeader />
        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <StyledHeader />
      <StyledCardsContainer>
        {data.map(({id, ...job}) => (
          <Card key={id} {...job}
          />
        ))}
      </StyledCardsContainer>
    </>
  );
}

export default App;
