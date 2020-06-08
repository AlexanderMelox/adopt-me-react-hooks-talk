import axios from 'axios';

const apiBaseURL =
  'https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2';

const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJPbVk3b1NYZ0k1TjdaMEhKRTY1M3FDeWNBZlBQNGVxd3R0RGgzeVQzMXNRWjNQS0l1NSIsImp0aSI6IjU5M2QxNDk0Njg5MTYyNDMyYmExN2M2YWM4NWZiMDc2YWRiN2FmZmNlZTFkZmFhMjYzNjc5YjhkYmRjYTc4NTNhNWUzNTA4OWNlZDlhNjJhIiwiaWF0IjoxNTkxNjM5MTU4LCJuYmYiOjE1OTE2MzkxNTgsImV4cCI6MTU5MTY0Mjc1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.kT2szSBCz9_gmdltkm10XU0gxVAPW3DIw-Y8FXzwVjCSTv0gHywE0TQq6FeY5Y5tpVt1PbhBm7XLzC7SJjqYAu5Dk34j_ykweBtPUvqIqYv6mz4rIHFXTYOEzQ_c7-9QOOMG74aF7ArKp6ZJpk0F7q3IGJ6Ag8Cau4QZWVmKwP8Q0mmUTN6Lj2R_LYRYc85GIQOD6AviJvmS1XnuoIG--5nSZHuTwNdLNxIoalOm3OCflLMRXLR3ePidVJG23Is_ik7IJsLVeOUL8b3GBBr9GsqTyZkA4SY2YvkzkY0qsfyjzgjBEhHV1ybafqIbZE-1m0kzSmFeV1oyop85HZ6b0Q`;

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
