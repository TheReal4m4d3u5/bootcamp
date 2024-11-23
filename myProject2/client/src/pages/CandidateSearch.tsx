import React, { useState, useEffect } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/styles.css';



const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]); // Initialize empty array
  const [error, setError] = useState<string | null>(null);
  const [candidateIndex, setCandidateIndex] = useState<number>(0); // Initialize empty array

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const allCandidates = await searchGithub(); // Fetch candidates using the initial API function


        // Fetch detailed data for each candidate
        const detailedCandidates = await Promise.all(
          allCandidates.map(async (allCandidates) => {
            // Fetch detailed data for each candidate by username
            const detailedData = await searchGithubUser(allCandidates.login);
            return detailedData;
          })
        );

        // Set candidates with detailed data
        setCandidates(detailedCandidates);

      } catch (err) {
        console.error('Failed to fetch candidates:', err);
        setError('Failed to fetch candidates');
      }
    };

    fetchCandidates();
  }, []);


  const addToCanidateList = (): void => {

    let username: Candidate[] = [];

  
    let getData: string | null = localStorage.getItem('user') || null;



    if (getData !== null) {
      username = JSON.parse(getData);
    }


    username.push(candidates[candidateIndex]);
    localStorage.setItem('user', JSON.stringify(username));

    if (candidates.length -1 !== candidateIndex){
      setCandidateIndex(candidateIndex + 1);
    }

  }

  const removeFromCanidates = (): void => {
    if (candidates.length -1 !== candidateIndex){
      setCandidateIndex(candidateIndex + 1);
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //This is where the Object array and tags are getting returned 
  return (
    <div>

      <div className="candidate-list">
        {(candidates.length > 0 && candidates.length -1 !== candidateIndex) ? (
          <CandidateCard candidate={candidates[candidateIndex]} addToCanidateList={addToCanidateList} removeFromCanidates={removeFromCanidates}></CandidateCard>
        ) : (
          <p>No candidates found.</p>
        )}
      </div>
    </div>

  );
};

export default CandidateSearch;




