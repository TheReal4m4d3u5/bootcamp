import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';
import Tech from '../models/Tech';

const Matchup = () => {
  const { loading, data } = useQuery(QUERY_TECH);

  const techList = data?.tech || [];
  const [formData, setFormData] = useState({
    tech1: techList[0]?.name || '',
    tech2: techList[0]?.name || '',
  });
  let navigate = useNavigate();

  const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const tech1Id = techList.find((tech: Tech) => tech.name === formData.tech1)?._id;
    const tech2Id = techList.find((tech: Tech) => tech.name === formData.tech2)?._id;


    console.log(tech1Id)
    console.log(tech2Id)

    if (!tech1Id || !tech2Id) {
      console.error('Invalid technology selection');
      return;
    }

    try {
      const { data } = await createMatchup({
        variables: { tech1: tech1Id, tech2: tech2Id },
      });

      navigate(`/matchup/${data.createMatchup.id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: techList[0]?.name || '',
      tech2: techList[0]?.name || '',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>Tech 1: </label>
            <select name="tech1" value={formData.tech1} onChange={handleInputChange}>
              {techList.map((tech: Tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
            <label>Tech 2: </label>
            <select name="tech2" value={formData.tech2} onChange={handleInputChange}>
              {techList.map((tech: Tech) => (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
            <button className="btn btn-danger" type="submit">
              Create Matchup!
            </button>
          </form>
        )}
      </div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default Matchup;