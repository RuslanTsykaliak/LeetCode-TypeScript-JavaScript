class Solution:
    def canChange(self, start: str, target: str) -> bool:

        n = len(start)

        before = []
        after = []

        for i, (s, t) in enumerate(zip(start, target)):
            if s != "_":
                before.append((s, i))
            if t != "_":
                after.append((t, i))

        if len(before) != len(after):
            return False

        for (b, bi), (a, ai) in zip(before, after):

            if b != a:
                return False

            if b == "L":
                if ai > bi:
                    return False

            if b == "R":
                if ai < bi:
                    return False

        return True
