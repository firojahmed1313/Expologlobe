/*const getuData = async () => {
    const url = `https://nomad-list-cities.p.rapidapi.com/nomad-list/${terget}?size=20&page=1&sort=desc&sort_by=overall_score`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4256421b56msh8a9624784e38f14p1ccd70jsnc4d94eeadf3d",
        "X-RapidAPI-Host": "nomad-list-cities.p.rapidapi.com",
      },
    };
    const url = 'https://airbnb19.p.rapidapi.com/api/v1/getLanguages';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4256421b56msh8a9624784e38f14p1ccd70jsnc4d94eeadf3d',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };

    console.log(url);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result != undefined) {
        setuData(result.data);
        console.log(udata)
      }
      setIsLoaded(false);
      
    } catch (error) {
      console.warn(error);
    }
  };
  useEffect(() =>
   
  getuData(),
   []);
*/