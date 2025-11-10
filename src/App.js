import React, { useState, useEffect } from 'react';
import { ShoppingCart, Check, X, CreditCard, Loader2, Globe, Trash2 } from 'lucide-react';

// Multilingual data
const translations = {
  ru: {
    welcome: "Добро пожаловать!",
    selectCategory: "Выберите категорию и товары",
    categories: "Категории",
    cart: "Корзина",
    emptyCart: "Корзина пуста",
    total: "Итого:",
    currency: "₸",
    checkout: "Перейти к оплате",
    paying: "Обработка платежа...",
    sendingOrder: "Отправка заказа...",
    thanks: "Спасибо за заказ!",
    orderNumber: "Номер заказа:",
    orderSent: "Заказ отправлен на кухню",
    paymentSuccess: "Оплата прошла успешно",
    paymentFailed: "Ошибка оплаты",
    tryAgain: "Попробовать снова",
    newOrder: "Новый заказ",
    selectCategoryPrompt: "Выберите категорию",
    paymentMethod: "Выберите способ оплаты",
    card: "Картой",
    cash: "Наличными",
    processing: "Обработка...",
    cancel: "Отмена",
    orderTypeTitle: "Где будете кушать?",
    dineIn: "Здесь",
    takeaway: "С собой",
    dineInDesc: "Поесть в зале",
    takeawayDesc: "Забрать с собой"
  },
  en: {
    welcome: "Welcome!",
    selectCategory: "Select category and items",
    categories: "Categories",
    cart: "Cart",
    emptyCart: "Cart is empty",
    total: "Total:",
    currency: "₸",
    checkout: "Proceed to Payment",
    paying: "Processing payment...",
    sendingOrder: "Sending order...",
    thanks: "Thank you for your order!",
    orderNumber: "Order number:",
    orderSent: "Order sent to kitchen",
    paymentSuccess: "Payment successful",
    paymentFailed: "Payment failed",
    tryAgain: "Try again",
    newOrder: "New order",
    selectCategoryPrompt: "Select category",
    paymentMethod: "Select payment method",
    card: "Card",
    cash: "Cash",
    processing: "Processing...",
    cancel: "Cancel",
    orderTypeTitle: "Where will you eat?",
    dineIn: "Dine In",
    takeaway: "Takeaway",
    dineInDesc: "Eat in restaurant",
    takeawayDesc: "Take to go"
  },
  kz: {
    welcome: "Қош келдіңіз!",
    selectCategory: "Санатты және тауарларды таңдаңыз",
    categories: "Санаттар",
    cart: "Себет",
    emptyCart: "Себет бос",
    total: "Барлығы:",
    currency: "₸",
    checkout: "Төлемге өту",
    paying: "Төлем өңделуде...",
    sendingOrder: "Тапсырыс жіберілуде...",
    thanks: "Тапсырысыңыз үшін рахмет!",
    orderNumber: "Тапсырыс нөмірі:",
    orderSent: "Тапсырыс асханаға жіберілді",
    paymentSuccess: "Төлем сәтті өтті",
    paymentFailed: "Төлем қатесі",
    tryAgain: "Қайталап көру",
    newOrder: "Жаңа тапсырыс",
    selectCategoryPrompt: "Санатты таңдаңыз",
    paymentMethod: "Төлем әдісін таңдаңыз",
    card: "Картамен",
    cash: "Қолма-қол ақшамен",
    processing: "Өңделуде...",
    cancel: "Болдырмау",
    orderTypeTitle: "Қайда тамақтанасыз?",
    dineIn: "Мұнда",
    takeaway: "Өзіммен",
    dineInDesc: "Залда тамақтану",
    takeawayDesc: "Өзіммен алу"
  }
};

const menuData = {
  ru: [
    {
      id: 1,
      name: "Паноццо",
      products: [
        { 
          id: 101, 
          name: "Паноццо с курицей", 
          price: 2200, 
          iikoId: "panozzо-chicken",
          description: "" 
        },
        { 
          id: 102, 
          name: "Паноццо с ветчиной", 
          price: 2200, 
          iikoId: "panozzо-ham",
          description: "" 
        },
        { 
          id: 103, 
          name: "Паноццо Альфредо", 
          price: 2400, 
          iikoId: "panozzо-alfredo",
          description: "" 
        },
        { 
          id: 104, 
          name: "Паноццо с ветчиной и грибами", 
          price: 2500, 
          iikoId: "panozzо-ham-mushrooms",
          description: "" 
        },
        { 
          id: 105, 
          name: "Паноццо с курицей карри", 
          price: 2400, 
          iikoId: "panozzо-chicken-curry",
          description: "" 
        },
        { 
          id: 106, 
          name: "Паноццо Песто с курицей", 
          price: 2400, 
          iikoId: "panozzо-pesto-chicken",
          description: "" 
        },
        { 
          id: 107, 
          name: "Паноццо Рататуй", 
          price: 2300, 
          iikoId: "panozzо-ratatouille",
          description: "" 
        },
        { 
          id: 108, 
          name: "Паноццо Трюфельный", 
          price: 2800, 
          iikoId: "panozzо-truffle",
          description: "" 
        },
        { 
          id: 109, 
          name: "Паноццо с креветкой", 
          price: 2900, 
          iikoId: "panozzо-shrimp",
          description: "" 
        },
        { 
          id: 110, 
          name: "Паноццо Скрембл", 
          price: 2100, 
          iikoId: "panozzо-scramble",
          description: "" 
        },
        { 
          id: 111, 
          name: "Паноццо Американо", 
          price: 2200, 
          iikoId: "panozzо-americano",
          description: "" 
        },
        { 
          id: 112, 
          name: "Паноццо с томленной говядиной", 
          price: 2900, 
          iikoId: "panozzо-braised-beef",
          description: "" 
        }
      ]
    },
    {
      id: 2,
      name: "Супы",
      products: [
        { 
          id: 201, 
          name: "Куринный суп-лапша по домашнему", 
          price: 1500, 
          iikoId: "soup-1",
          description: "" 
        },
        { 
          id: 202, 
          name: "Пельмени", 
          price: 1600, 
          iikoId: "soup-2",
          description: "" 
        },
        {
          id: 203,
          name: "Cолянка",
          price: 1690,
          iikoId: "soup-3",
          description: "" 
        },
        {
          id: 204,
          name: "Чечевичный суп",
          price: 1290,
          iikoId: "soup-4",
          description: "" 
        }
      ]
    },
    {
      id: 3,
      name: "Салаты",
      products: [
        { 
          id: 301, 
          name: "Салат с Тунцом", 
          price: 1800, 
          iikoId: "salad-tuna",
          description: "" 
        },
        { 
          id: 302, 
          name: "Груша пармезан", 
          price: 1600, 
          iikoId: "salad-pear",
          description: "" 
        }
      ]
    },
    {
      id: 4,
      name: "Паста",
      products: [
        { 
          id: 401, 
          name: "Паста Тальятелле с Курицей и Грибами", 
          price: 2000, 
          iikoId: "pasta-alfredo",
          description: "" 
        },
        { 
          id: 402, 
          name: "Паста Болоньезе", 
          price: 2100, 
          iikoId: "pasta-bolognese",
          description: "" 
        }
      ]
    },
    {
      id: 5,
      name: "Напитки",
      subcategories: [
        {
          id: 51,
          name: "Кофе",
          products: [
            { 
              id: 501, 
              name: "Американо", 
              price: 600, 
              iikoId: "coffee-americano",
              description: "" 
            },
            { 
              id: 502, 
              name: "Латте", 
              price: 800, 
              iikoId: "coffee-latte",
              description: "" 
            },
            { 
              id: 503, 
              name: "Капучино", 
              price: 750, 
              iikoId: "coffee-cappuccino",
              description: "" 
            }
          ]
        },
        {
          id: 52,
          name: "Холодный кофе",
          products: [
            { 
              id: 511, 
              name: "Айс кофе", 
              price: 900, 
              iikoId: "coffee-iced",
              description: "" 
            },
            { 
              id: 512, 
              name: "Айс латте", 
              price: 950, 
              iikoId: "coffee-iced-latte",
              description: "" 
            }
          ]
        },
        {
          id: 53,
          name: "Матча",
          products: [
            { 
              id: 521, 
              name: "Матча латте", 
              price: 1000, 
              iikoId: "matcha-latte",
              description: "" 
            },
            { 
              id: 522, 
              name: "Айс матча латте", 
              price: 1100, 
              iikoId: "matcha-iced-latte",
              description: "" 
            }
          ]
        },
        {
          id: 54,
          name: "Чай",
          products: [
            { 
              id: 531, 
              name: "Черный чай", 
              price: 500, 
              iikoId: "tea-black",
              description: "" 
            },
            { 
              id: 532, 
              name: "Зеленый чай", 
              price: 500, 
              iikoId: "tea-green",
              description: "" 
            },
            { 
              id: 533, 
              name: "Ягодный чай", 
              price: 600, 
              iikoId: "tea-berry",
              description: "" 
            }
          ]
        },
        {
          id: 55,
          name: "Софты",
          products: [
            { 
              id: 541, 
              name: "Кола", 
              price: 400, 
              iikoId: "soft-cola",
              description: "" 
            },
            { 
              id: 542, 
              name: "Вода", 
              price: 300, 
              iikoId: "soft-water",
              description: "" 
            },
            { 
              id: 543, 
              name: "Сан Пеллегрино", 
              price: 600, 
              iikoId: "soft-sanpellegrino",
              description: "" 
            }
          ]
        }
      ]
    }
  ],
  en: [
    {
      id: 1,
      name: "Panozzо",
      products: [
        { id: 101, name: "Chicken Panozzо", price: 2200, iikoId: "panozzо-chicken", description: "" },
        { id: 102, name: "Ham Panozzо", price: 2200, iikoId: "panozzо-ham", description: "" },
        { id: 103, name: "Alfredo Panozzо", price: 2400, iikoId: "panozzо-alfredo", description: "" },
        { id: 104, name: "Ham & Mushroom Panozzо", price: 2500, iikoId: "panozzо-ham-mushrooms", description: "" },
        { id: 105, name: "Chicken Curry Panozzо", price: 2400, iikoId: "panozzо-chicken-curry", description: "" },
        { id: 106, name: "Pesto Chicken Panozzо", price: 2400, iikoId: "panozzо-pesto-chicken", description: "" },
        { id: 107, name: "Ratatouille Panozzо", price: 2300, iikoId: "panozzо-ratatouille", description: "" },
        { id: 108, name: "Truffle Panozzо", price: 2800, iikoId: "panozzо-truffle", description: "" },
        { id: 109, name: "Shrimp Panozzо", price: 2900, iikoId: "panozzо-shrimp", description: "" },
        { id: 110, name: "Scramble Panozzо", price: 2100, iikoId: "panozzо-scramble", description: "" },
        { id: 111, name: "Americano Panozzо", price: 2200, iikoId: "panozzо-americano", description: "" },
        { id: 112, name: "Braised Beef Panozzо", price: 2900, iikoId: "panozzо-braised-beef", description: "" }
      ]
    },
    {
      id: 2,
      name: "Soups",
      products: [
        { id: 201, name: "Chicken soup", price: 1500, iikoId: "soup-1", description: "" },
        { id: 202, name: "Pelmeni", price: 1600, iikoId: "soup-2", description: "" },
        { id: 203, name: "Solyanka", price: 1690, iikoId: "soup-3", description: "" },
        { id: 204, name: "Lentil soup", price: 1290, iikoId: "soup-4", description: "" }
      ]
    },
    {
      id: 3,
      name: "Salads",
      products: [
        { id: 301, name: "Tuna salad", price: 1800, iikoId: "salad-tuna", description: "" },
        { id: 302, name: "Pear and Parmesan salad", price: 1600, iikoId: "salad-pear", description: "" }
      ]
    },
    {
      id: 4,
      name: "Pasta",
      products: [
        { id: 401, name: "Tagliatelle with Chicken and Mushrooms", price: 2000, iikoId: "pasta-alfredo", description: "" },
        { id: 402, name: "Bolognese Pasta", price: 2100, iikoId: "pasta-bolognese", description: "" }
      ]
    },
    {
      id: 5,
      name: "Drinks",
      subcategories: [
        {
          id: 51,
          name: "Coffee",
          products: [
            { id: 501, name: "Americano", price: 600, iikoId: "coffee-americano", description: "" },
            { id: 502, name: "Latte", price: 800, iikoId: "coffee-latte", description: "" },
            { id: 503, name: "Cappuccino", price: 750, iikoId: "coffee-cappuccino", description: "" }
          ]
        },
        {
          id: 52,
          name: "Iced Coffee",
          products: [
            { id: 511, name: "Iced Coffee", price: 900, iikoId: "coffee-iced", description: "" },
            { id: 512, name: "Iced Latte", price: 950, iikoId: "coffee-iced-latte", description: "" }
          ]
        },
        {
          id: 53,
          name: "Matcha",
          products: [
            { id: 521, name: "Matcha Latte", price: 1000, iikoId: "matcha-latte", description: "" },
            { id: 522, name: "Iced Matcha Latte", price: 1100, iikoId: "matcha-iced-latte", description: "" }
          ]
        },
        {
          id: 54,
          name: "Tea",
          products: [
            { id: 531, name: "Black Tea", price: 500, iikoId: "tea-black", description: "" },
            { id: 532, name: "Green Tea", price: 500, iikoId: "tea-green", description: "" },
            { id: 533, name: "Berry Tea", price: 600, iikoId: "tea-berry", description: "" }
          ]
        },
        {
          id: 55,
          name: "Soft Drinks",
          products: [
            { id: 541, name: "Cola", price: 400, iikoId: "soft-cola", description: "" },
            { id: 542, name: "Water", price: 300, iikoId: "soft-water", description: "" },
            { id: 543, name: "San Pellegrino", price: 600, iikoId: "soft-sanpellegrino", description: "" }
          ]
        }
      ]
    }
  ],
  kz: [
    {
      id: 1,
      name: "Паноццо",
      products: [
        { id: 101, name: "Тауықпен паноццо", price: 2200, iikoId: "panozzо-chicken", description: "" },
        { id: 102, name: "Күркетауық етінен паноццо", price: 2200, iikoId: "panozzо-ham", description: "" },
        { id: 103, name: "Альфредо паноццо", price: 2400, iikoId: "panozzо-alfredo", description: "" },
        { id: 104, name: "Күркетауық пен саңырауқұлақтан паноццо", price: 2500, iikoId: "panozzо-ham-mushrooms", description: "" },
        { id: 105, name: "Тауық карримен паноццо", price: 2400, iikoId: "panozzо-chicken-curry", description: "" },
        { id: 106, name: "Песто тауықпен паноццо", price: 2400, iikoId: "panozzо-pesto-chicken", description: "" },
        { id: 107, name: "Рататуй паноццо", price: 2300, iikoId: "panozzо-ratatouille", description: "" },
        { id: 108, name: "Трюфельді паноццо", price: 2800, iikoId: "panozzо-truffle", description: "" },
        { id: 109, name: "Асшаянмен паноццо", price: 2900, iikoId: "panozzо-shrimp", description: "" },
        { id: 110, name: "Скрембл паноццо", price: 2100, iikoId: "panozzо-scramble", description: "" },
        { id: 111, name: "Американо паноццо", price: 2200, iikoId: "panozzо-americano", description: "" },
        { id: 112, name: "Бұқтырылған сиыр етінен паноццо", price: 2900, iikoId: "panozzо-braised-beef", description: "" }
      ]
    },
    {
      id: 2,
      name: "Сорпалар",
      products: [
        { id: 201, name: "Тауық етінен сорпа", price: 1500, iikoId: "soup-1", description: "" },
        { id: 202, name: "Тұшпара", price: 1600, iikoId: "soup-2", description: "" },
        { id: 203, name: "Солянка", price: 1690, iikoId: "soup-3", description: "" },
        { id: 204, name: "Жасымақ сорпасы", price: 1290, iikoId: "soup-4", description: "" }
      ]
    },
    {
      id: 3,
      name: "Салаттар",
      products: [
        { id: 301, name: "Тунец қосылған салат", price: 1800, iikoId: "salad-tuna", description: "" },
        { id: 302, name: "Алмұрт пен пармезан салаты", price: 1600, iikoId: "salad-pear", description: "" }
      ]
    },
    {
      id: 4,
      name: "Паста",
      products: [
        { id: 401, name: "Тауық пен саңырауқұлақ қосылған тальятелле", price: 2000, iikoId: "pasta-alfredo", description: "" },
        { id: 402, name: "Болоньезе пастасы", price: 2100, iikoId: "pasta-bolognese", description: "" }
      ]
    },
    {
      id: 5,
      name: "Сусындар",
      subcategories: [
        {
          id: 51,
          name: "Кофе",
          products: [
            { id: 501, name: "Американо", price: 600, iikoId: "coffee-americano", description: "" },
            { id: 502, name: "Латте", price: 800, iikoId: "coffee-latte", description: "" },
            { id: 503, name: "Капучино", price: 750, iikoId: "coffee-cappuccino", description: "" }
          ]
        },
        {
          id: 52,
          name: "Суық кофе",
          products: [
            { id: 511, name: "Айс кофе", price: 900, iikoId: "coffee-iced", description: "" },
            { id: 512, name: "Айс латте", price: 950, iikoId: "coffee-iced-latte", description: "" }
          ]
        },
        {
          id: 53,
          name: "Матча",
          products: [
            { id: 521, name: "Матча латте", price: 1000, iikoId: "matcha-latte", description: "" },
            { id: 522, name: "Айс матча латте", price: 1100, iikoId: "matcha-iced-latte", description: "" }
          ]
        },
        {
          id: 54,
          name: "Шай",
          products: [
            { id: 531, name: "Қара шай", price: 500, iikoId: "tea-black", description: "" },
            { id: 532, name: "Жасыл шай", price: 500, iikoId: "tea-green", description: "" },
            { id: 533, name: "Жидекті шай", price: 600, iikoId: "tea-berry", description: "" }
          ]
        },
        {
          id: 55,
          name: "Газдалған сусындар",
          products: [
            { id: 541, name: "Кола", price: 400, iikoId: "soft-cola", description: "" },
            { id: 542, name: "Су", price: 300, iikoId: "soft-water", description: "" },
            { id: 543, name: "Сан Пеллегрино", price: 600, iikoId: "soft-sanpellegrino", description: "" }
          ]
        }
      ]
    }
  ]
};

// Configuration for iiko and payment integration
const config = {
  iikoApi: {
    baseUrl: 'https://api-ru.iiko.services',
    organizationId: 'YOUR_ORGANIZATION_ID',
    terminalGroupId: 'YOUR_TERMINAL_GROUP_ID',
  },
  payment: {
    provider: 'kaspi',
    merchantId: 'YOUR_MERCHANT_ID',
    terminalId: 'YOUR_TERMINAL_ID'
  }
};

const SelfServiceKiosk = () => {
  const [language, setLanguage] = useState(null);
  const [orderType, setOrderType] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [error, setError] = useState(null);

  const t = language ? translations[language] : translations.ru;
  const categories = language ? menuData[language] : menuData.ru;

  // Auto-reset after inactivity (60 seconds)
  useEffect(() => {
    let timeout;
    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!isProcessing) {
          resetKiosk();
        }
      }, 60000);
    };

    resetTimeout();
    const events = ['click', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimeout));

    return () => {
      clearTimeout(timeout);
      events.forEach(event => window.removeEventListener(event, resetTimeout));
    };
  }, [isProcessing]);

  const resetKiosk = () => {
    setLanguage(null);
    setOrderType(null);
    setCurrentCategory(null);
    setCurrentSubcategory(null);
    setCart([]);
    setShowPayment(false);
    setShowSuccess(false);
    setPaymentMethod(null);
    setError(null);
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  // Simulated iiko API integration
  const sendOrderToIiko = async (orderData) => {
    console.log('Sending order to iiko:', orderData);
    
    const iikoOrder = {
      organizationId: config.iikoApi.organizationId,
      terminalGroupId: config.iikoApi.terminalGroupId,
      order: {
        phone: '+77001234567',
        orderTypeId: 'DELIVERY_PICKUP',
        items: orderData.items.map(item => ({
          productId: item.iikoId,
          amount: item.quantity,
          price: item.price
        })),
        payments: [{
          paymentTypeKind: orderData.paymentMethod === 'card' ? 'Card' : 'Cash',
          sum: orderData.total,
          isProcessedExternally: orderData.paymentMethod === 'card'
        }]
      }
    };

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          orderId: `IIKO-${Date.now()}`,
          orderNumber: orderData.orderNumber
        });
      }, 1500);
    });
  };

  // Simulated payment processing
  const processPayment = async (amount, method) => {
    console.log('Processing payment:', { amount, method });
    
    const paymentRequest = {
      merchantId: config.payment.merchantId,
      terminalId: config.payment.terminalId,
      amount: amount,
      currency: 'KZT',
      orderId: `ORDER-${orderNumber}`,
      paymentMethod: method,
      returnUrl: window.location.href
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.05) {
          resolve({
            success: true,
            transactionId: `TXN-${Date.now()}`,
            approvalCode: Math.random().toString(36).substr(2, 6).toUpperCase()
          });
        } else {
          reject(new Error('Payment declined'));
        }
      }, 2000);
    });
  };

  const handleCheckout = async () => {
    if (!paymentMethod) return;
    
    setIsProcessing(true);
    setError(null);

    try {
      const paymentResult = await processPayment(getTotal(), paymentMethod);
      console.log('Payment successful:', paymentResult);

      const orderData = {
        orderNumber: orderNumber.toString().padStart(3, '0'),
        items: cart,
        total: getTotal(),
        paymentMethod: paymentMethod,
        orderType: orderType,
        paymentTransactionId: paymentResult.transactionId,
        timestamp: new Date().toISOString()
      };

      const iikoResult = await sendOrderToIiko(orderData);
      console.log('Order sent to iiko:', iikoResult);

      setShowPayment(false);
      setShowSuccess(true);
      setOrderNumber(prev => prev + 1);

      setTimeout(() => {
        resetKiosk();
      }, 5000);

    } catch (err) {
      console.error('Error:', err);
      setError(err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Language selection screen
  if (!language) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <Globe className="w-20 h-20 mx-auto mb-6 text-yellow-600" />
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Қош келдіңіз / Добро пожаловать / Welcome
          </h1>
          <p className="text-xl mb-8 text-gray-600">
            Тілді таңдаңыз / Выберите язык / Select language
          </p>
          <div className="grid grid-cols-3 gap-4">
            {['kz', 'ru', 'en'].map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white rounded-xl py-6 px-8 text-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                {lang === 'kz' ? 'Қазақша' : lang === 'en' ? 'English' : 'Русский'}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Order type selection screen
  if (!orderType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">{t.orderTypeTitle}</h1>
          <div className="grid grid-cols-2 gap-6">
            <button
              onClick={() => setOrderType('dine-in')}
              className="bg-gradient-to-br from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white rounded-2xl p-8 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              <div className="text-7xl mb-4">🍽️</div>
              <p className="text-3xl font-bold mb-2">{t.dineIn}</p>
              <p className="text-lg opacity-90">{t.dineInDesc}</p>
            </button>
            <button
              onClick={() => setOrderType('takeaway')}
              className="bg-gradient-to-br from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-white rounded-2xl p-8 transition-all duration-200 hover:scale-105 shadow-xl"
            >
              <div className="text-7xl mb-4">🛍️</div>
              <p className="text-3xl font-bold mb-2">{t.takeaway}</p>
              <p className="text-lg opacity-90">{t.takeawayDesc}</p>
            </button>
          </div>
          <button
            onClick={() => setLanguage(null)}
            className="mt-8 text-gray-500 hover:text-gray-700 underline"
          >
            ← {t.cancel}
          </button>
        </div>
      </div>
    );
  }

  // Success screen
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.thanks}</h2>
          <p className="text-2xl mb-2 text-gray-600">
            {t.orderNumber} <span className="font-bold text-green-600">#{orderNumber - 1}</span>
          </p>
          <p className="text-xl text-gray-500 mb-6">{t.orderSent}</p>
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
            <p className="text-green-700 font-semibold">{t.paymentSuccess}</p>
          </div>
        </div>
      </div>
    );
  }

  // Payment screen
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{t.paymentMethod}</h2>
            
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                <X className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <p className="text-red-700 font-semibold">{t.paymentFailed}</p>
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              </div>
            )}

            <div className="space-y-4 mb-8">
              <button
                onClick={() => setPaymentMethod('card')}
                disabled={isProcessing}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-yellow-300'
                } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <CreditCard className="w-8 h-8 text-yellow-600" />
                  <div className="text-left">
                    <p className="text-xl font-semibold text-gray-800">{t.card}</p>
                    <p className="text-sm text-gray-500">Kaspi, Halyk, Jusan, etc.</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('cash')}
                disabled={isProcessing}
                className={`w-full p-6 rounded-xl border-2 transition-all ${
                  paymentMethod === 'cash'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 hover:border-yellow-300'
                } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center text-2xl">💵</div>
                  <p className="text-xl font-semibold text-gray-800">{t.cash}</p>
                </div>
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-2xl font-bold text-gray-800">
                {t.total} <span className="text-yellow-600">{getTotal()} {t.currency}</span>
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowPayment(false)}
                disabled={isProcessing}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-4 px-6 rounded-xl font-semibold transition-colors disabled:opacity-50"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleCheckout}
                disabled={!paymentMethod || isProcessing}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white py-4 px-6 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.processing}
                  </>
                ) : (
                  t.checkout
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main ordering interface with fixed sidebar
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-4 shadow-lg flex-shrink-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{t.welcome}</h1>
            <p className="text-yellow-100 text-sm">{t.selectCategory}</p>
          </div>
          <button
            onClick={resetKiosk}
            className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            {language === 'ru' ? 'EN' : language === 'en' ? 'ҚЗ' : 'РУ'}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Fixed Sidebar with Categories and Cart */}
        <div className="w-96 bg-white border-r border-gray-200 flex flex-col h-full">
          {/* Categories Section */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-3 text-gray-800">{t.categories}</h2>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setCurrentCategory(category);
                    setCurrentSubcategory(null);
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    currentCategory?.id === category.id
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="font-semibold">{category.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="flex-1 p-4 flex flex-col min-h-0">
            <h2 className="text-xl font-bold mb-3 text-gray-800 flex items-center gap-2 flex-shrink-0">
              <ShoppingCart className="w-5 h-5" />
              {t.cart}
              {cart.length > 0 && (
                <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </h2>
            
            {cart.length === 0 ? (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-400 text-center">{t.emptyCart}</p>
              </div>
            ) : (
              <div className="flex flex-col flex-1 min-h-0">
                {/* Scrollable cart items with shadow indicator */}
                <div className="flex-1 overflow-y-auto space-y-2 mb-3 pr-1 min-h-0 relative scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100">
                  {cart.map(item => (
                    <div key={item.id} className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium text-gray-800 text-sm flex-1 pr-2 line-clamp-2">{item.name}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 flex-shrink-0 ml-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-7 h-7 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg font-bold text-sm transition-colors"
                          >
                            −
                          </button>
                          <span className="font-semibold text-gray-800 min-w-[1.5rem] text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-7 h-7 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg font-bold text-sm transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <p className="text-gray-700 font-semibold text-sm">{item.price * item.quantity} {t.currency}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Fixed total and checkout button with shadow */}
                <div className="border-t-2 pt-3 flex-shrink-0 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-center mb-3 bg-yellow-50 rounded-lg p-2">
                    <p className="text-lg font-bold text-gray-800">{t.total}</p>
                    <p className="text-2xl font-bold text-yellow-600">{getTotal()} {t.currency}</p>
                  </div>
                  <button
                    onClick={() => setShowPayment(true)}
                    className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    {t.checkout}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Products Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 min-h-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {currentCategory ? currentCategory.name : t.selectCategoryPrompt}
              {currentSubcategory && ` → ${currentSubcategory.name}`}
            </h2>
            
            {!currentCategory ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-xl text-gray-400">{t.selectCategoryPrompt}</p>
              </div>
            ) : currentCategory.subcategories ? (
              // Show subcategories for drinks
              !currentSubcategory ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {currentCategory.subcategories.map(subcategory => (
                    <button
                      key={subcategory.id}
                      onClick={() => setCurrentSubcategory(subcategory)}
                      className="bg-gradient-to-br from-yellow-50 to-amber-100 hover:from-yellow-100 hover:to-amber-200 p-6 rounded-xl transition-all hover:shadow-lg border-2 border-yellow-200 hover:border-yellow-400"
                    >
                      <div className="text-4xl mb-2">☕</div>
                      <p className="font-bold text-gray-800">{subcategory.name}</p>
                    </button>
                  ))}
                </div>
              ) : (
                // Show products from selected subcategory
                <div>
                  <button
                    onClick={() => setCurrentSubcategory(null)}
                    className="mb-4 text-yellow-600 hover:text-yellow-700 font-semibold flex items-center gap-2"
                  >
                    ← {t.cancel}
                  </button>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentSubcategory.products.map(product => (
                      <button
                        key={product.id}
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-yellow-50 hover:to-amber-100 p-5 rounded-xl transition-all hover:shadow-lg border-2 border-transparent hover:border-yellow-300 group"
                      >
                        <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center text-3xl">
                          🍽️
                        </div>
                        <p className="font-semibold text-gray-800 mb-1 text-sm">{product.name}</p>
                        {product.description && (
                          <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                        )}
                        <p className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700">{product.price} {t.currency}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )
            ) : (
              // Show products directly (for non-drink categories)
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {currentCategory.products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 hover:from-yellow-50 hover:to-amber-100 p-5 rounded-xl transition-all hover:shadow-lg border-2 border-transparent hover:border-yellow-300 group"
                  >
                    <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center text-3xl">
                      🍽️
                    </div>
                    <p className="font-semibold text-gray-800 mb-1 text-sm">{product.name}</p>
                    {product.description && (
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                    )}
                    <p className="text-lg font-bold text-yellow-600 group-hover:text-yellow-700">{product.price} {t.currency}</p>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfServiceKiosk;