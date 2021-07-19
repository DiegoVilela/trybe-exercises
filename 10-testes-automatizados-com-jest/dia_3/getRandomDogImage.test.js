const dog = require('./dog');

describe('Testing getRandomDogImage', () => {
  dog.getRandomDogImage = jest.fn();
  afterEach(dog.getRandomDogImage.mockReset);

  it('should return `request sucess`', async () => {
    dog.getRandomDogImage.mockResolvedValue('request sucess');

    await dog.getRandomDogImage();
    expect(dog.getRandomDogImage).toHaveBeenCalled();
    await expect(dog.getRandomDogImage()).resolves.toBe('request sucess');
    expect(dog.getRandomDogImage).toHaveBeenCalledTimes(2);
  });

  it('should return `request failed`', async () => {
    dog.getRandomDogImage.mockRejectedValue('request failed');

    await expect(dog.getRandomDogImage()).rejects.toBe('request failed');
    expect(dog.getRandomDogImage).toHaveBeenCalledTimes(1);
  });
});
