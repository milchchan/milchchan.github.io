import unittest
from shared.geohash import encode_geohash, decode_geohash, get_neighbors


class TestGeohash(unittest.TestCase):
    def test_encode_geohash(self):
        self.assertEqual(encode_geohash(57.64911, 10.40744, 11), 'u4pruydqqvj')

    def test_decode_geohash(self):
        location = decode_geohash('u4pruydqqvj')

        self.assertEqual(round(location['latitude'], 5), 57.64911)
        self.assertEqual(round(location['longitude'], 5), 10.40744)

    def test_get_neighbors(self):
        neighbors = get_neighbors('u4pruydqqvj')

        self.assertEqual(neighbors['top'], 'u4pruydqqvm')
        self.assertEqual(neighbors['bottom'], 'u4pruydqquv')
        self.assertEqual(neighbors['right'], 'u4pruydqqvn')
        self.assertEqual(neighbors['left'], 'u4pruydqqvh')
        self.assertEqual(neighbors['topleft'], 'u4pruydqqvk')
        self.assertEqual(neighbors['topright'], 'u4pruydqqvq')
        self.assertEqual(neighbors['bottomright'], 'u4pruydqquy')
        self.assertEqual(neighbors['bottomleft'], 'u4pruydqquu')


if __name__ == "__main__":
    unittest.main()
