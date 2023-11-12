class UndergroundSystem:

    def __init__(self):
        self.tickets = {}
        self.times = {}

    def checkIn(self, id: int, stationName: str, t: int) -> None:
        self.tickets[id] = (stationName, t)

    def checkOut(self, id: int, stationName: str, t: int) -> None:
        prevStation, prevTime = self.tickets[id]
        difference = t - prevTime
        if (prevStation, stationName) in self.times:
            self.times[(prevStation, stationName)][0] += difference
            self.times[(prevStation, stationName)][1] += 1
        else:
            self.times[(prevStation, stationName)] = [difference, 1]

    def getAverageTime(self, startStation: str, endStation: str) -> float:
        total, length = self.times[(startStation, endStation)]
        return total / length
