class Solution:
    def findAnswer(self, n: int, edges: List[List[int]]) -> List[bool]:
        graph = {i: {} for i in range(n)}
        for u, v, w in edges:
            if v not in graph[u]:
                graph[u][v] = w
            if u not in graph[v]:
                graph[v][u] = w

        distances1 = {i: float("inf") for i in range(n)}
        heap = [(0, 0)]
        while heap:
            dist, node = heapq.heappop(heap)
            if distances1[node] < float("inf"):
                continue
            distances1[node] = dist
            for neib in graph[node]:
                w = graph[node][neib]
                if distances1[neib] == float("inf"):
                    heapq.heappush(heap, (dist + w, neib))

        distances2 = {i: float("inf") for i in range(n)}
        heap = [(0, n - 1)]
        while heap:
            dist, node = heapq.heappop(heap)
            if distances2[node] < float("inf"):
                continue
            distances2[node] = dist
            for neib in graph[node]:
                w = graph[node][neib]
                if distances2[neib] == float("inf"):
                    heapq.heappush(heap, (dist + w, neib))
        # print(distances1,distances2)
        D = distances1[n - 1]
        if D == inf:
            return [False for u, v, w in edges]
        return [
            (
                True
                if distances1[u] + distances2[v] + w == D
                or distances1[v] + distances2[u] + w == D
                else False
            )
            for u, v, w in edges
        ]
