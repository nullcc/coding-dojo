keyword_map = {
    "3": "Foo",
    "5": "Bar",
    "7": "Qix"
}


def replace_zero_with_star(arg):
    fn = (lambda x: "*" if x == "0" else x)
    return ''.join([fn(c) for c in str(arg)])


def foo_bar_qix(arg):
    tokens = []
    zero_indexs = []

    for key, value in keyword_map.items():
        if arg % int(key) == 0:
            tokens.append(keyword_map[key])
    for c in str(arg):
        token = keyword_map.get(c, None)
        if token is not None:
            tokens.append(token)
        if c == "0":
            zero_indexs.append(len(tokens))
    if len(tokens) > 0:
        zero_indexs.reverse()
        for zero_index in zero_indexs:
            tokens.insert(zero_index, "*")
        return "".join(tokens)
    else:
        return replace_zero_with_star(arg)
