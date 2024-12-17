class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        dict1, str1, ans = collections.Counter(s), "", []

        for key, val in dict1.items():
            heapq.heappush(ans, (-ord(key), val))

        while ans:
            k1, v1 = heapq.heappop(ans)
            if str1 and str1[-1] == chr(-k1):
                if ans:
                    k2, v2 = heapq.heappop(ans)
                    str1 += chr(-k2)
                    v2 -= 1
                    if v2 > 0:
                        heapq.heappush(ans, (k2, v2))
                else:
                    break

            fill = min(v1, repeatLimit)
            str1 += chr(-k1) * fill
            v1 = v1 - fill

            if v1 > 0:
                heapq.heappush(ans, (k1, v1))

        return str1
