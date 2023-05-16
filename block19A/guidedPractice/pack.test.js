expect(LuckyNumber(5,12)).toBe(17);

expect(GetmeNumber(7, 12)).not.toBe(8);

expect(total(5.51021, 4.01123)).toBeCloseTo(9.52);

const forSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
     'nice.oven': true,
    },
  };

expect(forSale).toHaveProperty(['kitchen', 'nice.oven']);
expect(forSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');

