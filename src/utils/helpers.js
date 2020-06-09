import axios from 'axios';

const apiBaseURL =
  'https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2';

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPbVk3b1NYZ0k1TjdaMEhKRTY1M3FDeWNBZlBQNGVxd3R0RGgzeVQzMXNRWjNQS0l1NSIsImp0aSI6ImQ3MGZmMzY1NTc2NDIxMDgxYzIxYjg0M2QxYTBmYzJhODE4ZmIzOTdkZTZlYjc1NDg4MjRiYzZmMGFlYzI0MmYyYTMwZWVmMDI2ZjY4NjliIiwiaWF0IjoxNTkxNzE0Mzg4LCJuYmYiOjE1OTE3MTQzODgsImV4cCI6MTU5MTcxNzk4OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.MmU59rmdDeI9gdl2bcj8pEohQF8AG04Bm470dnpTK-IRAVMXeWk0ZbP9wbiNYi9v01JnSHa4RK87J4OK1Zy9aI3_0rffzZENL7R4VscuFIgVf6pqqH2DqzymXq71B6_sk9zt7VUNnm0AMssBDZDOld-C4xIMMkrV7jo_fB2ltR5ayOVTyo8HZTM2b3lG2ywAOKokw5icfBuP2IM91pF4ujG0D1BRIlfU4AlsGPuB2ZcwGasrhphPkxhqFvXZrNIBQJjQ3YliOVq5JCVUn4ODDttT1EY23UJvON88lmaDNgml5Ob6mbqm_T3u7s5Gv4vRLnOteFTzA4s7cr72ty8mYw`;

export const fetchBreeds = async (animal) => {
  try {
    const { data } = await axios.get(`${apiBaseURL}/types/${animal}/breeds`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Returns an array of breeds
    return ['all', ...data.breeds.map(({ name }) => name)];
  } catch (error) {
    console.log(error);
  }
};

export const fetchAnimals = async ({ location, animal, breed }) => {
  try {
    let breedParameter;
    if (breed !== 'all') {
      breedParameter = `&breed=${breed}`;
    } else {
      breedParameter = '';
    }

    const {
      data,
    } = await axios.get(
      `${apiBaseURL}/animals?location=${location}&type=${animal}${breedParameter}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const animals = data.animals.map(
      ({
        id,
        url,
        species,
        breeds,
        age,
        name,
        photos,
        distance,
        _links: {
          self: { href },
        },
      }) => ({
        id,
        url,
        species,
        breeds,
        age,
        name,
        photos,
        distance,
        details: href,
      })
    );
    return animals;
  } catch (error) {}
};
