var zodiacSign = function (day, month) {
    if ((day >= 22 && month === 12) || (day <= 21 && month === 1)) {
        return 'Capricorn';
    }
    else if ((day >= 21 && month === 1) || (day <= 20 && month === 2)) {
        return 'Aquarium';
    }
    else if ((day >= 20 && month === 2) || (day <= 21 && month === 3)) {
        return 'Pisces';
    }
    else if ((day >= 21 && month === 3) || (day <= 20 && month === 4)) {
        return 'Aries';
    }
    else if ((day >= 20 && month === 4) || (day <= 21 && month === 5)) {
        return 'Taurus';
    }
    else if ((day >= 21 && month === 5) || (day <= 21 && month === 6)) {
        return 'Gemini';
    }
    else if ((day >= 21 && month === 6) || (day <= 23 && month === 7)) {
        return 'Cancer';
    }
    else if ((day >= 23 && month === 7) || (day <= 23 && month === 8)) {
        return 'Leo';
    }
    else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
        return 'Virgo';
    }
    else if ((day >= 23 && month === 9) || (day <= 23 && month === 10)) {
        return 'Libra';
    }
    else if ((day >= 23 && month === 10) || (day <= 22 && month === 11)) {
        return 'Scorpio';
    }
    else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
        return 'Sagittarius';
    }
    else
        return 'Please introduce a valid data';
};
console.log(zodiacSign(24, 12));
