use std::convert::TryInto;

fn persistence(num: u64) -> u64 {
    let d = digits(num.try_into().unwrap());

    for (i, k) in d.enumerate() {}
}

fn digits(n: usize) -> impl Iterator<Item = u32> {
    n.to_string()
        .chars()
        .map(|d| d.to_digit(10).unwrap())
        .collect::<Vec<_>>()
        .into_iter()
}

#[cfg(test)]
mod tests {

    #[test]
    fn sample_tests() {
        assert_eq!(super::persistence(39), 3);
        assert_eq!(super::persistence(4), 0);
        assert_eq!(super::persistence(25), 2);
        assert_eq!(super::persistence(999), 4);
    }
}
