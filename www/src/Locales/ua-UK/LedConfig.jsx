export default {
  rgb: {
    'header-text': 'Налаштування RGB LED',
    'data-pin-label': 'Пін для даних (-1 щоб не використовувати)',
    'led-format-label': 'Формат LED',
    'led-layout-label': 'Компонування LED',
    'leds-per-button-label': 'LEDів на кнопку',
    'led-brightness-maximum-label': 'Максимальна яскравість',
    'led-brightness-steps-label': 'Крок яскравості',
  },
  player: {
    'header-text': 'Player LED',
    'pwm-sub-header-text':
      'Для PWM LED кожен LED слід підключити до окремого GPIO піну.',
    'rgb-sub-header-text':
      'Для RGB LED індекси повинні бути після останнього визначеного LED для кнопки в розділі <1>RGB LED порядок кнопок</1> і, ймовірно, <3>починати з індексу {{rgbLedStartIndex}}</3>.',
    'pled-type-label': 'Тип Player LED',
    'pled-type-off': 'Вимкнено',
    'pled-type-pwm': 'PWM',
    'pled-type-rgb': 'RGB',
    'pled-color-label': 'Колір RGB PLED',
  },
  'pled-pin-label': 'PLED #{{pin}} Пін',
  'pled-index-label': 'PLED #{{index}} Індекс',
  'rgb-order': {
    'header-text': 'Порядок RGB LED кнопок',
    'sub-header-text':
      'Тут ви можете визначити, які кнопки мають RGB LED і в якому порядку вони працюватимуть від контрольної плати. Це необхідно для підтримки певних LED анімацій та статичних тем.',
    'sub-header1-text':
      'Перетягніть елементи списку, щоб призначити та змінити порядок RGB LED.',
    'available-header-text': 'Доступні кнопки',
    'assigned-header-text': 'Призначені кнопки',
  },
  'turn-off-when-suspended': 'Вимикати при призупиненні',
};
