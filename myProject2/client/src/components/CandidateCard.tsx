import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts'; // Adjust the path as needed


interface CandidateCardProps {
  candidate: Candidate;
  addToCanidateList: () => void | undefined;
  removeFromCanidates: () => void | undefined;
}






const CandidateCard: React.FC<CandidateCardProps> = ({ candidate, addToCanidateList, removeFromCanidates }) => {


  return (
    <div className="candidate-card">
      <figure className='candidateImage'>{

        candidate.avatar_url ? (
          <img
            src={candidate.avatar_url}
            alt={candidate.login ? `${candidate.login}'s Avatar` : "User's Avatar"}
            className="candidate-avatar"
          />
        ) : (
          <p>Avatar not available</p>
        )
      }
      </figure>
      <article className="candidate-details">

        <figcaption>
          {candidate.login ? candidate.login : "User login not available"}
        </figcaption>

        <p className="candidate-name">
          {candidate.login ? (
            <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
              {candidate.login}
            </a>
          ) : (
            "Username not available"
          )}
        </p>        

        <p>
          {candidate.location ? candidate.location : "User location not available"}
        </p>

        <p>
          {candidate.company ? candidate.company : "User company not available"}
        </p>

        <p>
          {candidate.bio ? candidate.bio : "User location not available"}
        </p>


      </article>
      <section className='candidateButtons'>
        <button onClick={() => removeFromCanidates()} className="remove">-</button>
        <button onClick={() => addToCanidateList()} className="add">+</button>
      </section>
    </div>

  );
};

export default CandidateCard;