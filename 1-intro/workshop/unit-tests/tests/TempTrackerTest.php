<?php

use PHPUnit\Framework\TestCase;

require_once('./src/TempTracker.php');

class TempTrackerTest extends TestCase {
    public function test_get_min() {
        $tempTracker = new TempTracker();
        $tempTracker->insert(10);
        $tempTracker->insert(20);
        $tempTracker->insert(30);
        $tempTracker->insert(40);
        $this->assertEquals($tempTracker->get_min(), 10, 'Should be 10');
    }
    
    public function test_get_max() {
        $tempTracker = new TempTracker();
        $tempTracker->insert(10);
        $tempTracker->insert(20);
        $tempTracker->insert(30);
        $tempTracker->insert(40);
        $this->assertEquals($tempTracker->get_max(), 40, 'Should be 40');
    }

    public function test_get_temps() {
        $tempTracker = new TempTracker();
        $tempTracker->insert(10);
        $tempTracker->insert(20);
        $tempTracker->insert(30);
        $tempTracker->insert(40);
        $this->assertEquals($tempTracker->get_temps(), [10, 20, 30, 40], 'Should be [10, 20, 30, 40]');
    }

    public function test_get_mean() {
        $tempTracker = new TempTracker();
        $tempTracker->insert(10);
        $tempTracker->insert(20);
        $tempTracker->insert(30);
        $tempTracker->insert(40);
        $this->assertEquals($tempTracker->get_mean(), 25, 'Should be 25');
    }
}