import unittest

from foo_bar_qix import foo_bar_qix


class FooBarQixTest(unittest.TestCase):
    def setUp(self):
        pass

    def test_should_output_1_when_given_1(self):
        output = foo_bar_qix(1)
        self.assertEqual(output, '1')

    def test_should_output_2_when_given_2(self):
        output = foo_bar_qix(2)
        self.assertEqual(output, '2')

    def test_should_output_FOOFOO_when_given_3(self):
        output = foo_bar_qix(3)
        self.assertEqual(output, 'FooFoo')

    def test_should_output_4_when_given_4(self):
        output = foo_bar_qix(4)
        self.assertEqual(output, '4')

    def test_should_output_BarBar_when_given_5(self):
        output = foo_bar_qix(5)
        self.assertEqual(output, 'BarBar')

    def test_should_output_Foo_when_given_6(self):
        output = foo_bar_qix(6)
        self.assertEqual(output, "Foo")

    def test_should_output_QixQix_when_given_7(self):
        output = foo_bar_qix(7)
        self.assertEqual(output, 'QixQix')

    def test_should_output_8_when_given_8(self):
        output = foo_bar_qix(8)
        self.assertEqual(output, '8')

    def test_should_output_Foo_when_given_9(self):
        output = foo_bar_qix(9)
        self.assertEqual(output, 'Foo')

    def test_should_output_Bar_when_given_10(self):
        output = foo_bar_qix(10)
        self.assertEqual(output, 'Bar*')

    def test_should_output_Foo_when_given_13(self):
        output = foo_bar_qix(13)
        self.assertEqual(output, 'Foo')

    def test_should_output_FooBarBar_when_given_15(self):
        output = foo_bar_qix(15)
        self.assertEqual(output, 'FooBarBar')

    def test_should_output_FooQix_when_given_21(self):
        output = foo_bar_qix(21)
        self.assertEqual(output, 'FooQix')

    def test_should_output_FooFooFoo_when_given_33(self):
        output = foo_bar_qix(33)
        self.assertEqual(output, 'FooFooFoo')

    def test_should_output_FooBar_when_given_51(self):
        output = foo_bar_qix(51)
        self.assertEqual(output, 'FooBar')

    def test_should_output_BarFoo_when_given_53(self):
        output = foo_bar_qix(53)
        self.assertEqual(output, 'BarFoo')

    def test_should_output_1x1_when_given_101(self):
        output = foo_bar_qix(101)
        self.assertEqual(output, '1*1')

    def test_should_output_FooFooxFoo_when_given_303(self):
        output = foo_bar_qix(303)
        self.assertEqual(output, 'FooFoo*Foo')

    def test_should_output_FooBarQixxBar_when_given_105(self):
        output = foo_bar_qix(105)
        self.assertEqual(output, 'FooBarQix*Bar')

    def test_should_output_FooQixxx_when_given_10101(self):
        output = foo_bar_qix(10101)
        self.assertEqual(output, 'FooQix**')
