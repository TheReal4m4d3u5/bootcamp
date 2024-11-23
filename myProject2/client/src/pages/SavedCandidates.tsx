import React, { useEffect, useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface.ts';

const SavedCandidates: React.FC = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('user');
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }

  }, []);

  //this is not working to remove from local storage
  const removeFromCanidates = (id: string) => {
    const updatedCandidates = savedCandidates.filter(c => c.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('user', JSON.stringify(updatedCandidates));
  };

  // Adding a sample candidate to demonstrate the save functionality
  return (

    <div>
      <div className='pcHeader'>Potential Candidates</div>
      <table>
        <tbody>
          <thead>
            <tr className='header'>
              <th className='headerImage'>Image</th>
              <th className='headerName'>Name</th>
              <th className='headerLocaton'>Location</th>
              <th className='headerEmail'>Email</th>
              <th className='headerCompany'>Company</th>
              <th className='headerBio'>Bio</th>
              <th className='headerReject'>Reject</th>
            </tr>
          </thead>

          {savedCandidates.map(candidate => (
            <div className="savedCandidate" key={candidate.login}>
              <figure className="savedCandidatAvatar">{

                candidate.avatar_url ? (
                  <img
                    src={candidate.avatar_url}
                    alt={candidate.login ? `${candidate.login}'s Avatar` : "User's Avatar"}
                    className="savedCandidateAvatar"
                  />
                ) : (
                  <p>Avatar not available</p>
                )
              }

              </figure>
              <article className="savedCandidateDetails">


                <p className="saved-candidate-name">
                  {candidate.name ? candidate.name : "User name not available"}
                </p>
                <p className="saved-candidate-location">
                  {candidate.location ? candidate.location : "User location not available"}
                </p>
                <p className="saved-candidate-email">
                  {candidate.email ? candidate.email : "User email not available"}
                </p>
                <p className="saved-candidate-html_url">
                  {candidate.html_url ? candidate.html_url : "User company not available"}
                </p>
                <p className="saved-candidate-company">
                  {candidate.company ? candidate.company : "User company not available"}
                </p>
                <p className="saved-candidate-bio">
                  {candidate.bio ? candidate.bio : "User location not available"}
                </p>
              </article>
              <section className="savedRemove">
                <button onClick={() => removeFromCanidates(candidate.id)}  >-</button>
              </section>

            </div>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;