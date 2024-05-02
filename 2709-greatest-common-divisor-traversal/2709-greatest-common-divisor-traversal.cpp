#include <vector>

#include <numeric>

#include <algorithm>

#include <unordered_set>

using namespace std;


// Define a constant size for the array of vectors

const int MAX_VALUE = 100010;

vector<int> prime_factors[MAX_VALUE];


// Lambda function to initialize the prime factors for each number up to MAX_VALUE

int init = []() {

    for (int x = 1; x < MAX_VALUE; ++x) {

        int value = x;

        int divisor = 2;

        while (divisor <= value / divisor) {

            if (value % divisor == 0) {

                prime_factors[x].push_back(divisor);

                while (value % divisor == 0) {

                    value /= divisor;

                }

            }

            ++divisor;

        }

        if (value > 1) {

            prime_factors[x].push_back(value);

        }

    }

    return 0;

}();


// Class to represent a Union-Find data structure

class UnionFind {

public:

    // Constructor initializes Union-Find with n elements

    UnionFind(int n): parent(n), rank(n, 1), count(n) {

        iota(parent.begin(), parent.end(), 0);

    }


    // Method to merge two sets; returns true if a merge happened, false if already united

    bool unite(int a, int b) {

        int rootA = find(a), rootB = find(b);

        if (rootA == rootB) {

            return false;

        }

        // Union by rank

        if (rank[rootA] > rank[rootB]) {

            parent[rootB] = rootA;

            rank[rootA] += rank[rootB];

        } else {

            parent[rootA] = rootB;

            rank[rootB] += rank[rootA];

        }

        --count;

        return true;

    }


    // Method to find the root of the set that element x belongs to

    int find(int x) {

        if (parent[x] != x) {

            parent[x] = find(parent[x]); // Path compression

        }

        return parent[x];

    }


    // Get the current number of disjoint sets

    int getCount() const {

        return count;

    }


private:

    // Private members to keep track of the parents and the size of each tree

    vector<int> parent, rank;

    int count;  // Number of disjoint sets

};


// Class with a method to solve the problem

class Solution {

public:

    // Method to determine if all pairs in the nums vector can traverse via their prime factors

    bool canTraverseAllPairs(vector<int>& nums) {

        int maxNum = *max_element(nums.begin(), nums.end());

        int size = nums.size();

        UnionFind uf(maxNum + size + 1);


        // Union sets based on shared prime factors

        for (int i = 0; i < size; ++i) {

            for (int factor : prime_factors[nums[i]]) {

                uf.unite(i, factor + size);

            }

        }


        // Check if all numbers are connected through their prime factors

        unordered_set<int> distinctRoots;

        for (int i = 0; i < size; ++i) {

            distinctRoots.insert(uf.find(i));

        }

        // If there is only one distinct root, all numbers are connected

        return distinctRoots.size() == 1;

    }

};