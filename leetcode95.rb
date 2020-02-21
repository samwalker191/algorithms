require 'byebug'
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

def generate_trees(n)
    arr = *(1..n)
    recur_trees(arr)
end

def recur_trees(arr)
    # iterate through each possible root 
    # for each root, build left and right trees
        # how to build trees?
        # array is already sorted, so dont need to check if value is smaller/greater
        # left and right trees need their own left and right trees built
        # gotta use recursion on this one
        #
    
    # base case
    # done building tree if array is empty
    # done building tree if array only has 1 ele, tree is just a root
    return [nil] if arr.empty?
    return [TreeNode.new(arr[0])] if arr.length == 1

    trees = []
    arr.each_with_index do |num, idx|
        # build left and right trees
        left = recur_trees(arr[0...idx])
        right = recur_trees(arr[idx+1..-1])
        
        # create root and left and right children in all combos
        left.each do |ltree|
            right.each do |rtree|
                root = TreeNode.new(num)
                root.left = ltree
                root.right = rtree
                trees << root
            end
        end
    end
    trees
end

p generate_trees(3)
