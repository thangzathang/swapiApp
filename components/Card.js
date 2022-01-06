export const getData = async (link) => {
  const res = await fetch(link);
  const data = await res.json();

  return {
    data,
  };
};

const Card = ({ children }) => {
  let charactersList = [...children];

  // Best attempt so far;
  let printList = [];

  printList = charactersList.map(async (item) => {
    const res = await getData(item);
    const data = await res.json();
    console.log(data);
  });

  //   charactersList.map((item) => {
  //     console.log("Item is:", item);
  //     const getChar = getData(item);
  //     console.log("getChar is:", getChar);
  //     getChar.then(function (res) {
  //       console.log("Res is:", res.data);
  //       printList.push(res.data);
  //     });
  //   });

  return (
    <div>
      {printList.map((item, index) => {
        return (
          <h3 key={item + index}>
            {index}: {item}
          </h3>
        );
      })}
    </div>
  );
};

export default Card;
