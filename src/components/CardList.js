import React from 'react';
import Card from './Card';

const CardList = ({ robots, random }) => {
  // const cardArray = robots.map((user, i) => {
  //   return (
  //     <Card
  //       key={i}
  //       id={robots[i].id}
  //       name={robots[i].name}
  //       email={robots[i].email}
  //     />
  //   );
  // })

  // return (
  //   <div>
  //     {cardArray}
  //   </div>
  // );

  // if(true) {   // this is to check functionality of componentDidCatch lifecycle hook
  //   throw new Error('NOOOOOO!')
  // }
  return (
    <div>
      {
        robots.map((user, index)  => {
          return (
            <Card
              key={index}
              name={user.name}
              email={user.email}
              pic_id={random.filter(item => item[0] === user.id)[0][1]}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;
