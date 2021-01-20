import { shallowMount } from '@vue/test-utils';
import Card from '../../src/components/Card.vue';

test('displays card', () => {
  const wrapper = shallowMount(Card, {
    propsData: {
      streamer: {
        id: '509658',
        name: 'Just Chatting',
        box_art_url:
          'https://static-cdn.jtvnw.net/ttv-boxart/Just%20Chatting-300x400.jpg',
      },
    },
  });

  expect(wrapper.find('.card-container').exists()).toBeTruthy();
  expect(wrapper.find('.image').exists()).toBeTruthy();
  expect(wrapper.find('.subtitle').text()).toEqual('Just Chatting');
});
