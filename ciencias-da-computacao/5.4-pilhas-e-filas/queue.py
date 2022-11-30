class Queue:
    def __init__(self):
        self.__data = []

    def __str__(self):
        return f"{self.__data}"

    def is_empty(self):
        return not len(self.__data)

    def enqueue(self, value):
        self.__data.append(value)

    def dequeue(self):
        return self.__data.pop(0)

    def peek(self):
        return self.__data[0]


queue = Queue()

queue.enqueue(2)
queue.enqueue(5)
print(queue)
print(queue.peek())
queue.dequeue()
print(queue)
