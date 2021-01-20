import { mount } from '@vue/test-utils';
import App from '../../src/App.vue';

const axios = jest.mock('axios', () => ({
  __esModule: true,
  get: jest.fn(() =>
    Promise.resolve([
      {
        id: '509658',
        name: 'Just Chatting',
        box_art_url:
          'https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-300x400.jpg',
      },
      {
        id: '509658',
        name: 'Just Chatting',
        box_art_url:
          'https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-300x400.jpg',
      },
    ])
  ),
}));

test('Loads App', async () => {
  const wrapper = mount(App);
  expect(wrapper.find('.wrapper').exists()).toBeTruthy();
  expect(wrapper.find('.search-wrapper-unclick').exists()).toBeTruthy();
});
