import axios from 'axios';

const apiBaseURL =
  'https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2';

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPbVk3b1NYZ0k1TjdaMEhKRTY1M3FDeWNBZlBQNGVxd3R0RGgzeVQzMXNRWjNQS0l1NSIsImp0aSI6IjRlZTliYzI0M2NhMzg3ODNkZTkyNjMwOTU1Y2ZlMzE2MGY4MDJlNWYwY2NmYTUwMWI1MGFmZTUwM2EyMThhZTU0ZTI2NWJjYTFiNzRhMTgwIiwiaWF0IjoxNTkxNjU5ODMwLCJuYmYiOjE1OTE2NTk4MzAsImV4cCI6MTU5MTY2MzQzMCwic3ViIjoiIiwic2NvcGVzIjpbXX0.vPg3tvGgN18sI3EKu6YSQgf8wMXHIg-lJ4uo7KSPjhMbnaHzpXZk6K4F3Aik-59H-Zd294ZMBX70y_QvfYHl8cR74GaDXGo0HGe6jHv81DKV81P4yGQxbKUW8cXWMrAu-x4u6AeCQj4RCthXysw4DFb6U-1b7fkp0ZrQW0xsCIlQnmqrR-ytV3dBgP_XmXkBNX63W9nQ-wOBi1GAO0_P98YvLe4hfeYwBhJk07Yz8iIPPxAm7dZ92Ap6Ov1URfFIIxktbT94c1aK3eVWxRizz7rTUjkTXcfF88BTPuky89ie_VAkGdsEJVRHqYyCTgsI5lLqR9G5LZ_LtV4YID2gvg`;

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
