// bool containsDuplicate(List<int> nums) {
//   Set<int> setNumber = nums.toSet();
//   return nums.length != setNumber.length ? true : false;
// }

bool containsDuplicate(List<int> nums) {
  Set<int> newSet = {};

  for (var n in nums) {
    if (newSet.contains(n)) {
      return true;
    }
    newSet.add(n);
  }
  return false;
}
