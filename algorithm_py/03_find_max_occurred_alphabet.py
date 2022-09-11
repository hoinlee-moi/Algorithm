# 내가 짠 코드
input = "hello my name is sparta"


def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if char.isalpha():
            alphabet_ascii = ord(char)
            alphabet_order = alphabet_ascii - ord('a')
            alphabet_occurrence_array[alphabet_order] += 1
    index = max(alphabet_occurrence_array)
    many_char_index= alphabet_occurrence_array.index(index)
    alphbet = many_char_index + ord('a')

    return chr(alphbet)


result = find_max_occurred_alphabet(input)
print(result)

# # 튜터님 코드 -1
# input = "hello my name is sparta"
#
#
# def find_max_occurred_alphabet(string):
#     alphbet_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "m", "o", "p", "q", "r", "s", "t",
#                      "u", "v", "w", "x", "y", "z"]
#     max_occurrence =0
#     max_alphabet = alphbet_array[0]
#
#     for alphbet in alphbet_array :
#         occurrence = 0
#         for char in string :
#             if char == alphbet :
#                 occurrence +=1
#
#         if occurrence > max_occurrence :
#             max_occurrence = occurrence
#             max_alphabet = alphbet
#     return max_alphabet
#
#
# result = find_max_occurred_alphabet(input)
# print(result)

#튜터님 코드 -2
#
# input = "hello my name is sparta"
#
#
# def find_max_occurred_alphabet(string):
#     alphabet_occurrence_array = [0] * 26
#
#     for char in string :
#         if not char.isalpha() :
#             continue
#         arr_index = ord(char) - ord("a")
#         alphabet_occurrence_array[arr_index] +=1
#
#     max_occurrence = 0
#     max_alphabet_index = 0
#     for index in range(len(alphabet_occurrence_array)) :
#         # index 0 -> alphabet_occurrence 3
#         alphabet_occurrence = alphabet_occurrence_array[index]
#
#         if alphabet_occurrence > max_occurrence :
#             max_alphabet_index = index
#             max_occurrence = alphabet_occurrence
#
#     return  chr(max_alphabet_index + ord("a"))
#
#
# result = find_max_occurred_alphabet(input)
# print(result)