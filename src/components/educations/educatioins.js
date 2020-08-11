import React from 'react';
import Education from './education';

class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationList: [
        {
          year: 1990,
          title: 'I was born in Katowice',
          content:
            'lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, dolore est aut modi.',
        },
        {
          year: 2005,
          title: 'Secondary school specializing in artistic',
          content:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 2009,
          title: 'Fist level graduation in Graphic Design',
          content:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repellat.',
        },
        {
          year: 2012,
          title: 'Second level graduation in Graphic Design',
          content: 'Ducimus, aliquam tempore autem itaque et accusantium!',
        },
      ],
    };
  }

  render() {
    return (
      <div className="education">
        <h1>EDUCATION</h1>
        {this.state.educationList.map((education) => (
          // eslint-disable-next-line react/jsx-key
          <Education
            year={education.year}
            title={education.title}
            content={education.content}
          />
        ))}
      </div>
    );
  }
}

export default Educations;
