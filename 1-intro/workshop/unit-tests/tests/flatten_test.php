<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    // Test tableau vide
    public function test_empty_array()
    {
        $this->assertEquals(flatten([]), [], 'Should be []');
    }
    // Test tableau dans tableau
    public function test_array_in_array()
    {
        $this->assertEquals(flatten([[[]]]), [], 'Should be []');
    }
    // Test tableau avec 1 element
    public function test_int_in_array()
    {
        $this->assertEquals(flatten([5]), [5], 'Should be [5]');
    }
    // Test tableau avec plusieurs éléments
    public function test_many_int_in_array()
    {
        $this->assertEquals(flatten([5, [6, [7]]]), [5, 6, 7], 'Should be [5, 6, 7]');
    }
}