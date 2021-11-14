import { getGifs } from '../../helpers/getGifs';

describe('Testing with the getGifs function', () => {
  test('Should return an empty list', async () => {
    const entities = await getGifs('');
    expect(entities.length).toBe(0);
  })

  test('Should return 10 entities', async () => {
    const entities = await getGifs('One Punch');
    expect(entities.length).toBe(10);
  })
});
