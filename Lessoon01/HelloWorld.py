import numpy as np
import pandas as pd


def main():
    # 1. 创建数组
    # 从 Python 列表创建
    a = np.array([1, 2, 3, 4, 5])
    print("a =", a)

    # 创建等差数列并重塑形状
    b = np.arange(1, 10).reshape(3, 3)
    print("\nb =\n", b)

    # 创建随机矩阵
    rng = np.random.default_rng(seed=42)
    c = rng.random((3, 3))  # 3×3 0–1 随机数
    print("\nc =\n", c)

    # 2. 数组运算
    print("\n元素级运算：")
    print("a * 2 =", a * 2)
    print("b + b.T =\n", b + b.T)

    # 点积与矩阵乘法
    dot_ab = a.dot(a)  # 向量点积
    matmul_bc = b @ c  # 矩阵相乘
    print("\n向量点积 a·a =", dot_ab)
    print("矩阵乘法 b @ c =\n", matmul_bc)

    # 3. 统计与聚合
    print("\n统计信息：")
    print("a 的均值 =", a.mean())
    print("b 的最大值、最小值 =", b.max(), b.min())
    print("c 每列的和 =", c.sum(axis=0))

    # 4. 线性代数
    print("\n线性代数：")
    # 求 b 的行列式
    det_b = np.linalg.det(b)
    print("det(b) =", det_b)
    # 求 c 的逆（若可逆）
    if np.linalg.det(c) != 0:
        inv_c = np.linalg.inv(c)
        print("c 的逆矩阵 inv(c) =\n", inv_c)
    # 求 b 的特征值和特征向量
    eigvals, eigvecs = np.linalg.eig(b)
    print("b 的特征值 =", eigvals)
    print("b 的特征向量 =\n", eigvecs)

    # 5. 布尔索引与过滤
    print("\n布尔索引示例：")
    large = a[a > 3]
    print("a 中大于 3 的元素 =", large)


if __name__ == "__main__":
    main()
