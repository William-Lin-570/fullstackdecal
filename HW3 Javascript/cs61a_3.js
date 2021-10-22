function num_eights(pos){
    /* Returns the number of times 8 appears as a digit of pos.

    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    >>> from construct_check import check
    >>> # ban all assignment statements
    >>> check(HW_SOURCE_FILE, 'num_eights',
    ...       ['Assign', 'AugAssign'])
    True
    */
    let n = pos;
    let counter = 0;
    while (n > 0) {
      if (n%10 == 8) {
        counter += 1;
      }
      n = Math.floor(n/10);
    }
    return counter;
}

function pingpong(n){
    /*
		Return the nth element of the ping-pong sequence.

    >>> pingpong(8)
    8
    >>> pingpong(10)
    6
    >>> pingpong(15)
    1
    >>> pingpong(21)
    -1
    >>> pingpong(22)
    -2
    >>> pingpong(30)
    -2
    >>> pingpong(68)
    0
    >>> pingpong(69)
    -1
    >>> pingpong(80)
    0
    >>> pingpong(81)
    1
    >>> pingpong(82)
    0
    >>> pingpong(100)
    -6
    >>> from construct_check import check
    >>> # ban assignment statements
    >>> check(HW_SOURCE_FILE, 'pingpong', ['Assign', 'AugAssign'])
    True
    */
    function helper(n, i, curr, direction){
      if (i == n){
        return curr;
      } else {
        if (i % 8 == 0 || num_eights(i) > 0) {
          return helper(n, i + 1, curr - direction, -direction);
        } else {
          return helper(n, i + 1, curr + direction, direction);
        }
      }
    }
    return helper(n, 1, 1, 1);
}

function missing_digits(n) {
  let missing = 0;
  function split(n) {
    let arr = [];
    while (n > 0) {
      arr += n%10;
      n = Math.floor(n/10);
    }
    arr += n;
    return arr;
  }
  function firstDigit(n) {
    while (n >= 10) {
      n /= 10
    }
    return Math.floor(n);
  }
  function lastDigit(n) {
    return Math.floor(n % 10);
  }
  let first = firstDigit(n);
  let last = lastDigit(n);
  let have = split(n);
  for (let a = first; a <= last; a++) {
    if (!have.includes(a)) {
      missing += 1;
    }
  }
  return missing;
}

function get_next_coin(coin){
    /* Return the next coin.
    >>> get_next_coin(1)
    5
    >>> get_next_coin(5)
    10
    >>> get_next_coin(10)
    25
    >>> get_next_coin(2) # Other values return None
    */
    if (coin == 1) {
      return 5;
    } else if (coin == 5) {
      return 10;
    } else if (coin == 10) {
      return 25;
    } else {
      return None;
    }
}

function count_coins(change){
    /* Return the number of ways to make change using coins of value of 1, 5, 10, 25.
    >>> count_coins(15)
    6
    >>> count_coins(10)
    4
    >>> count_coins(20)
    9
    >>> count_coins(100) # How many ways to make change for a dollar?
    242
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(HW_SOURCE_FILE, 'count_coins', ['While', 'For'])
    True
    */
    function helper(amount, smallest) {
      if (amount == 0) {
        return 1;
      }
      if (amount < smallest) {
        return 0;
      }
      let without_coin = helper(amount, get_next_coin(smallest));
      let with_coin = helper(amount - smallest, smallest);
      return without_coin + with_coin;
    }
    return helper(change, 1);
}
