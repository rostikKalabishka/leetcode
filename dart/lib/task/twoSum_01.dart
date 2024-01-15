class Solution {
  List<int> twoSum(List<int> nums, int target) {
    List<int> result = [];
    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j < nums.length; j++) {
        if (target == nums[i] + nums[j]) {
          result = [i, j];
        }
      }
    }
    return result;
  }
}
